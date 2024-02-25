import {Appbar} from "react-native-paper";
import {useState} from "react";
import {router, useLocalSearchParams} from "expo-router";

export default function Page() {
    const [isScrolled, setIsScrolled] = useState(false)

    // ID: [id]
    const {id} = useLocalSearchParams()

    return (
        <>
            <Appbar.Header elevated={isScrolled}>
                <Appbar.BackAction onPress={() => {
                    router.back()
                }}/>
                <Appbar.Content title={`Calculation ${id}`}/>
                <Appbar.Action icon="trash-can" onPress={() => {
                }}/>
            </Appbar.Header>
        </>
    )
}
