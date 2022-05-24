import { Image } from "react-native";

export default function Hero() {
  return (
    <>
      <Image
        style={{ width: "80%", height: "20%" }}
        source={{
          uri: "https://static.parade.com/wp-content/uploads/2021/04/funny-photos2-1-e1617576745514.jpg",
        }}
      />
    </>
  );
}
