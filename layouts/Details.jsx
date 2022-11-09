import { View, Text } from "react-native";
import { Button, Box } from '@mui/material';
import theme from '../Theme';

export default function Details({ navigation }){
    return(
        <View style={theme.container.main}>
            <Text style={theme.font.details.title}>Informações do aplicativo</Text>
            <Box style={theme.container.details}>
                <Text style={theme.font.details.text}>
                    Este aplicativo foi desenvolvido com o propósito
                    de mostrar ao usuário a temperatura da região de
                    sua localização.
                    <br/>
                    <br/> 
                    As informações apresentadas no aplicativo são fornecidas
                    pela companhia OpenWheater.
                    <br/>
                    <br/> 
                    Para mais informações acesse: <a href="https://openweathermap.org/">openweathermap.org</a>
                </Text>
            </Box>
            <Box style={theme.button.details}>
                <Button 
                    variant="contained"
                    onClick={() => navigation.navigate('Menu')}
                >
                    Voltar
                </Button>
            </Box>
        </View>
    );
}