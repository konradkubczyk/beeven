import {StyleSheet, Text, View} from "react-native";
import {Appbar} from "react-native-paper";

export default function Page() {
    return (
        <>
            <Appbar.Header>
                <Appbar.BackAction onPress={() => {}} />
                <Appbar.Content title="Home" />
                <Appbar.Action icon="magnify" onPress={() => {}} />
                <Appbar.Action icon="cog" onPress={() => {}} />
            </Appbar.Header>
            <View style={styles.container}>
                <View style={styles.main}>
                    <Text style={styles.title}>Hello World</Text>
                    <Text style={styles.subtitle}>This is the first page of your app.</Text>
                </View>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        padding: 24,
    },
    main: {
        flex: 1,
        justifyContent: "center",
        maxWidth: 960,
        marginHorizontal: "auto",
    },
    title: {
        fontSize: 64,
        fontWeight: "bold",
    },
    subtitle: {
        fontSize: 36,
        color: "#38434D",
    },
});
