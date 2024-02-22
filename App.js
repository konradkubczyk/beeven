import {StatusBar} from 'expo-status-bar';
import {StyleSheet, Text, View} from 'react-native';
import {MD3Theme as DefaultTheme, PaperProvider} from "react-native-paper";

const theme = {
    ...DefaultTheme
}

export default function App() {
    return (
        <PaperProvider theme={theme}>
            <View style={styles.container}>
                <Text
                    style={{fontSize: 32}}
                >
                    Hello, world!
                </Text>
                <StatusBar style="auto"/>
            </View>
        </PaperProvider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
