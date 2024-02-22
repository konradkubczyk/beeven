import {Slot} from "expo-router";
import {MD3Theme as DefaultTheme, PaperProvider} from "react-native-paper";

const theme = {
    ...DefaultTheme,
}

export default function IndexLayout() {
    return (
        <PaperProvider theme={theme}>
            <Slot/>
        </PaperProvider>
    )
}
