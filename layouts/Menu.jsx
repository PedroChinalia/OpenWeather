import { View, Text, Image } from "react-native";
import { Button, Box } from '@mui/material';
import theme from '../Theme';
import { useFonts, LobsterTwo_400Regular } from "@expo-google-fonts/lobster-two";

export default function Menu({ navigation }){

    const font = useFonts({
        "Lobster": LobsterTwo_400Regular,
    });

    return(
        <View style={theme.container.main}>
            <Image 
                source={require('../assets/logo.png')}
                style={theme.image.logo} 
            />
            <Text style={[theme.font.logo, { fontFamily: "Lobster" }]}>Weather Now</Text>
            <Box style={theme.button.menu}>
                <Button 
                    variant="contained"
                    onClick={() => navigation.navigate('Home')}
                >
                    Entrar
                </Button>
            </Box>
            <Box style={theme.button.menu}>
                <Button 
                    variant="contained"
                    onClick={() => navigation.navigate('Details')}
                >
                    Mais Informações
                </Button>
            </Box>
        </View>
    );
}