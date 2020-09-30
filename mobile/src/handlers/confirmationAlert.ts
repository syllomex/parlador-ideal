import { Alert } from "react-native";

interface IProps {
  title: string;
  message: string;
  confirmOptionText?: string;
  cancelOptionText?: string;
  onConfirm?: Function;
  onCancel?: Function;
}

export function confirmationAlert({
  title,
  message,
  confirmOptionText,
  cancelOptionText,
  onConfirm,
  onCancel,
}: IProps): { handler: React.Dispatch<any> } {
  return {
    handler: () =>
      Alert.alert(
        title,
        message,
        [
          {
            text: confirmOptionText || "SIM",
            onPress: () => onConfirm && onConfirm(),
          },
          {
            text: cancelOptionText || "NÃO",
            onPress: () => onCancel && onCancel(),
          },
        ],
        { cancelable: true }
      ),
  };
}
