import { View, Image, Text } from "react-native";
import Clipboard from "../../../assets/Clipboard.png";
import { styles } from "./style";

export function Empty() {
  return (
    <View style={styles.emptyContainer}>
      <Image source={Clipboard} style={styles.image} />
      <Text style={styles.textBold}>Você não tem nenhum item na sua lista</Text>
      <Text style={[styles.textBold, styles.textRegular]}>
        Crie suas tarefas e comece a organizar o seu dia!
      </Text>
    </View>
  );
}
