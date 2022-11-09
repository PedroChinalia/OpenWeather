import { Text } from "react-native";
import { Box } from '@mui/material';
import theme from '../Theme';
import ThermostatIcon from '@mui/icons-material/Thermostat';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import AirIcon from '@mui/icons-material/Air';
import OpacityIcon from '@mui/icons-material/Opacity';

export default function DataDisplay(props){

    return (
        <>
            <Box style={theme.container.data}>
                <Text style={theme.font.data}>
                    <ThermostatIcon/> Temperatura atual: {props.data.main.temp} °C
                </Text>
            </Box>
            <Box style={theme.container.data}>
                <Text style={theme.font.data}>
                    <LocalFireDepartmentIcon/> Temperatura máxima: {props.data.main.temp_max} °C
                </Text>
            </Box>
            <Box style={theme.container.data}>
                <Text style={theme.font.data}>
                    <AcUnitIcon/> Temperatura mínima: {props.data.main.temp_min} °C
                </Text>
            </Box>
            <Box style={theme.container.data}>
                <Text style={theme.font.data}>
                    <AirIcon/> Pressão atmosférica: {props.data.main.pressure} hPa
                </Text>
            </Box>
            <Box style={theme.container.data}>
                <Text style={theme.font.data}>
                    <OpacityIcon/> Umidade do ar: {props.data.main.humidity} %
                </Text>
            </Box>
        </>
    );
}