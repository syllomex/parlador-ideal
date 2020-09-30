import { createContext, useContext, useState } from "react";
import AsyncStorage from "@react-native-community/async-storage";

interface IProfileContext {
  profile: IProfile | null | undefined;
  setProfile: React.Dispatch<React.SetStateAction<IProfile | null | undefined>>;
}

interface IProfile {
  payload: {
    id: string;
    name: string;
    exp: Date;
    iat: Date;
  };
  token: string;
}

function ProfileProvider() {
  const [profile, setProfile] = useState<IProfile | null | undefined>();

  if (profile === null) {
    return { profile, setProfile };
  }

  if (profile) {
    AsyncStorage.setItem("profile", JSON.stringify(profile));
    return { profile, setProfile };
  }

  if (profile === undefined) {
    AsyncStorage.getItem("profile").then((value) => {
      if (value) setProfile(JSON.parse(value));
      return { profile, setProfile };
    });

    setProfile(null);
    return { profile, setProfile };
  }

  return { profile, setProfile };
}

const ProfileContext = createContext<any>(undefined);

function useProfile() {
  const { profile, setProfile } = useContext<IProfileContext>(ProfileContext);
  return { profile, setProfile };
}

export {
  ProfileContext,
  ProfileProvider,
  useProfile,
  IProfile,
  IProfileContext,
};
