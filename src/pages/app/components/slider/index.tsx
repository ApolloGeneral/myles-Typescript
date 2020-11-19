import * as React from 'react';
import { useState } from 'react';
import { View, Text, Image } from "react-native"
import AppIntroSlider from "react-native-app-intro-slider"

const slides = [
    //trocar os titles e texts
    {
        key: "1",
        image: require("./assets/1.jpg")
    },
    {
        key:" 2",
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
//import { styles } from '../../../../styles/styles';




export default ({ navigation }: any) => {

    const [showHome, setShowHome] = useState(false);

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

    if (showHome) {
        return <Text> oi </Text>
    } else {
        return (
            <AppIntroSlider
                renderItem={renderSlides}
                data={slides}
                activeDotStyle={{
                    backgroundColor: "#3F3D56",
                    width: 30
                }}
                renderNextButton={() => <Text></Text>}
                renderDoneButton={() => <Text style={{fontSize:20,fontWeight:"bold", color:"#3F3D56"}}>Acessar!</Text>}
                onDone={() => navigation.navigate("Home")}
                
            />
        )
    }
}