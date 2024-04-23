import { ImageSourcePropType } from "react-native";

interface User {
  name: string;
  profile: ImageSourcePropType;
}

export const user: User = {
  name: "tugane",
  profile: require("../assets/images/avatar.jpeg"),
};