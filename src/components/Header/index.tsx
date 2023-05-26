import { View, Image, TextInput, TouchableOpacity, Text } from "react-native";
import Logo from "../../../assets/Logo.png";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { styles } from "./styles";

type HeaderProps = {
  task: string;
  inputRef: React.RefObject<TextInput>;
  onChangeText: (task: string) => void;
  onPress: () => void;
};

export function Header({ task, inputRef, onChangeText, onPress }: HeaderProps) {
  return (
    <View style={styles.headerContainer}>
      <Image source={Logo} />
      <View style={styles.form}>
        <TextInput
          style={[
            styles.input,
            inputRef.current?.isFocused() && task ? styles.inputBorder : null,
          ]}
          placeholder="Adicione uma nova tarefa"
          placeholderTextColor="#A09CB1"
          value={task}
          onChangeText={onChangeText}
          ref={inputRef}
          autoCorrect={false}
          onSubmitEditing={onPress}
          returnKeyType="done"
        />
        <TouchableOpacity style={styles.button} onPress={onPress}>
          <MaterialCommunityIcons
            name="plus-circle-outline"
            size={22}
            color={"green"}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}
