import { Alert } from "react-native";

export function logoutHandler(
  onLogoutConfirm: Function
): { handler: React.Dispatch<any> } {
  return {
    handler: () =>
      Alert.alert(
        "Sair",
        "Tem certeza que deseja sair da sua conta?",
        [
          {
            text: "Sim, desejo sair",
            onPress: () => onLogoutConfirm(),
          },
          {
            text: "Continuar logado",
            onPress: () => console.log("Continuar logado"),
          },
        ],
        { cancelable: true }
      ),
  };
}
