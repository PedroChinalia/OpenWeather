import { View, Text } from "react-native";
import { useState, useEffect } from "react";
import { Button, Box, Skeleton } from '@mui/material';
import theme from '../Theme';
import DataDisplay from "../components/DataDisplay";
import axios from 'axios';

export default function Home({ navigation }){

    const [ location, setLocation ]  = useState('');
    const [ weather, setWeather ] = useState('');
    const key = 'e1495f78559276cb626b83a36c743ebf';

    let getWeather = async(lat, long) => {
        let res = await axios.get("https://api.openweathermap.org/data/2.5/weather", {
            params: {
                lat: lat,
                lon: long,
                appid: key,
                lang: 'pt',
                units: 'metric'
            }
        });
        setWeather(res.data)
    }

    useEffect(() => {
        navigator.geolocation.getCurrentPosition((position) => {
            getWeather(position.coords.latitude, position.coords.longitude);
            setLocation(true);
        })
    }, []);

    if(location){
        return(
            <View style={theme.container.main}>

                <Text style={theme.font.home.title}>
                    Confira a temperatura da sua localização!
                </Text>
                
                { weather ? <DataDisplay data={weather}/> : (
                    <>
                        <Skeleton variant="rounded" style={theme.skeleton}/> 
                        <Skeleton variant="rounded" style={theme.skeleton}/> 
                        <Skeleton variant="rounded" style={theme.skeleton}/> 
                        <Skeleton variant="rounded" style={theme.skeleton}/> 
                        <Skeleton variant="rounded" style={theme.skeleton}/> 
                    </>
                )}

                <Box style={theme.button.home}>
                    <Button 
                        variant="contained"
                        onClick={() => navigation.navigate('Menu')}
                    >
                        Voltar
                    </Button>
                </Box>
            </View>
        );
    } else {
        return(
            <View style={theme.container.main}>
                <Text style={theme.font.home.title}>Você precisa habilitar sua localização!</Text>
                <Box style={theme.button.home}>
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
}