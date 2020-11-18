import React from "react";
import { Image, View } from "react-native";
import FadeOut from "react-native-fade-in-out";

export default ({ shouldAnimate }: { shouldAnimate: any }) => {
  return (
    <View
      style={{
        display: "flex",
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#481fa1",
      }}
    >
      <FadeOut visible={!shouldAnimate} duration={100}>
        <Image
          style={{ width: 260, height: 260 }}
          source={{
            uri: "https://media3.giphy.com/media/jd4Bz6sWrI98fjPjsg/giphy.gif",
          }}
        />
      </FadeOut>
    </View>
  );
};
