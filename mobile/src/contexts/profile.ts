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
  console.log("[profile provider] running provider")
  const [profile, setProfile] = useState<IProfile | null | undefined>();

  if (profile === null) {
    console.log("[profile provider] profile is null")
    return { profile, setProfile };
  }

  if (profile) {
    console.log("[profile provider] profile exists. saving on storage")
    AsyncStorage.setItem("profile", JSON.stringify(profile));
    return { profile, setProfile };
  }

  if (profile === undefined) {
    console.log("[profile provider] profile is undefined")
    AsyncStorage.getItem("profile").then((value) => {
      console.log("[profile provider] profile found in storage")
      if (value) setProfile(JSON.parse(value));
      return { profile, setProfile };
    });

    console.log("[profile provider] profile not found. setting null")
    setProfile(null);
    return { profile, setProfile };
  }

  console.log("[profile provider] returning")
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
