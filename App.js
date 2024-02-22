import React, { useEffect } from 'react';
import { SafeAreaView, Text, Image, FlatList, View, StyleSheet } from 'react-native';
import Orientation from 'react-native-orientation-locker';

const menuItems = [
    { id: '1', title: 'Pizza', image: require('./assets/pizza.jpg') },
    { id: '2', title: 'Hamburger', image: require('./assets/hamburger.jpg') },
    // Adicione mais itens aqui
];

const MenuItem = ({ title, image }) => (
    <View style={styles.menuItemContainer}>
        <Image source={image} style={styles.menuItemImage} />
        <Text style={styles.menuItemText}>{title}</Text>
    </View>
);

export default function App() {
    useEffect(() => {
        // Configurando a orientação apenas para paisagem em tablets
        if (Platform.OS === 'android' && Platform.isPad) {
            Orientation.lockToLandscape();
        }
        return () => {
            Orientation.unlockAllOrientations();
        };
    }, []);

    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={menuItems}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => <MenuItem title={item.title} image={item.image} />}
            />
            <Text style={styles.footerText}>Hello World</Text>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingHorizontal: 10,
        paddingTop: 20,
    },
    menuItemContainer: {
        flexDirection: 'row',
        marginVertical: 10,
        alignItems: 'center',
    },
    menuItemImage: {
        width: 50,
        height: 50,
        marginRight: 10,
        borderRadius: 5,
    },
    menuItemText: {
        fontSize: 16,
    },
    footerText: {
        textAlign: 'center',
        marginTop: 20,
        fontSize: 18,
        fontWeight: 'bold',
    },
});
