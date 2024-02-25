import {FlatList, StyleSheet, Text, View} from "react-native";
import {Appbar, FAB, Icon, IconButton, List} from "react-native-paper";
import {useState} from "react";
import {router} from "expo-router";

export default function Page() {
    const [isScrolled, setIsScrolled] = useState(false)

    return (
        <>
            <Appbar.Header elevated={isScrolled}>
                <Appbar.Content title='Calculations'/>
                <Appbar.Action icon='cog' onPress={() => {
                }}/>
            </Appbar.Header>
            <FlatList
                data={[
                    {
                        key: '1',
                        title: 'Pizza party at Bob\'s',
                        description: 'Some pizzas and drinks',
                        date: '2024-02-25'
                    },
                    {
                        key: '2',
                        title: 'Birthday party at Alice\'s',
                        description: 'Cake and balloons',
                        date: '2024-02-15'
                    },
                    {
                        key: '3',
                        title: 'Camping trip',
                        description: 'Tents and food',
                        date: '2024-02-01'
                    },
                    {key: '4', title: 'Movie night', description: 'Popcorn and drinks', date: '2024-01-30'},
                    {key: '5', title: 'Game night', description: 'Board games and snacks', date: '2024-01-15'},
                    {key: '6', title: 'Hiking trip', description: 'Backpacks and food', date: '2024-01-01'},
                    {key: '7', title: 'Beach day', description: 'Sunscreen and snacks', date: '2023-12-30'},
                    {key: '8', title: 'Picnic', description: 'Blankets and food', date: '2023-12-15'},
                    {key: '9', title: 'BBQ', description: 'Grill and drinks', date: '2023-12-01'},
                    {
                        key: '10',
                        title: 'Dinner at a restaurant',
                        description: 'Reservations and drinks',
                        date: '2023-11-30'
                    },
                    {
                        key: '11',
                        title: 'Party at Thomas\' house',
                        description: 'Board games and snacks',
                        date: '2023-11-15'
                    },
                    {key: '12', title: 'Karaoke night', description: 'Drinks and snacks', date: '2023-11-01'},
                    {key: '13', title: 'Dance party', description: 'Drinks and snacks', date: '2023-10-30'},
                ]}
                renderItem={({item}) => (
                    <List.Item
                        title={item.title}
                        description={() => <>
                            <View style={{flexDirection: 'row', gap: 5, alignItems: 'center'}}>
                                <Icon size={12} source='clock-outline'/>
                                <Text>{item.date}</Text>
                            </View>
                            <View style={{flexDirection: 'row', gap: 5, alignItems: 'center'}}>
                                <Icon size={12} source='format-align-left'/>
                                <Text>{item.description}</Text>
                            </View>
                        </>}
                        right={() => <IconButton icon="dots-vertical" style={{alignSelf: 'center'}} onPress={() => {
                        }}/>}
                        onPress={() => {
                            router.push(`/calculation/${item.key}`)
                        }}
                        style={{paddingRight: 5}}
                    />
                )}
                onScroll={(event) => {
                    setIsScrolled(event.nativeEvent.contentOffset.y > 0)
                }}
            />
            <FAB
                icon="plus"
                style={styles.fab}
                onPress={() => console.log('Pressed')}
            />
        </>
    );
}

const styles = StyleSheet.create({
    fab: {
        position: 'absolute',
        margin: 16,
        right: 0,
        bottom: 0,
    },
})
