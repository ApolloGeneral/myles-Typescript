import React from 'react';
import { View, Text, Image } from "react-native"
import AppIntroSlider from "react-native-app-intro-slider"

const slides = [
    {
        key: "1",
        image: require("./assets/1.jpg")
    },
    {
        key: " 2",
        title: "100% na prática",
        text: "descrição",
        image: require("./assets/2.jpg")
    },
    {
        key: "3",
        title: "curso focado no mercado",
        text: "descrição",
        image: require("./assets/3.jpg")
    }
]

export default ({ navigation }: any) => {
    function renderSlides({ item }: any) {
        return (
            <View style={{ flex: 1 }}>
                <Image
                    source={item.image}
                    style={{
                        resizeMode: "cover",
                        height: "100%",
                        width: "100%",
                    }}
                />

            </View>
        )
    }

    return (
        <AppIntroSlider
            renderItem={renderSlides}
            data={slides}
            activeDotStyle={{
                backgroundColor: "#3F3D56",
                width: 30
            }}
            renderNextButton={() => <Text></Text>}
            renderDoneButton={() => <Text style={{ fontSize: 20, fontWeight: "bold", color: "#3F3D56" }}>Acessar!</Text>}
            onDone={() => navigation.navigate("Home")}

        />
    )
}