import { TouchableOpacity, View, Text } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { styles } from "./style";
import { TaskDTO } from "../../dtos/TaskDTO";

type TasksProps = TaskDTO & {
  onTaskDone: (id: string) => void;
  onTaskDeleted: (id: string) => void;
};

export function Task({
  id,
  title,
  isCompleted,
  onTaskDone,
  onTaskDeleted,
}: TasksProps) {
  return (
    <View style={styles.taskContainer}>
      <TouchableOpacity onPress={() => onTaskDone(id)}>
        <MaterialCommunityIcons
          name={
            isCompleted
              ? "checkbox-marked-circle-outline"
              : "checkbox-blank-circle-outline"
          }
          size={22}
          color={isCompleted ? "purple" : "white"}
        />
      </TouchableOpacity>

      <View style={styles.textContainer}>
        <Text style={isCompleted ? styles.textDone : styles.textCreated}>
          {title}
        </Text>
      </View>

      <TouchableOpacity onPress={() => onTaskDeleted(id)}>
        <MaterialCommunityIcons
          name="trash-can-outline"
          size={20}
          color={"white"}
        />
      </TouchableOpacity>
    </View>
  );
}
