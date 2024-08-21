import { View, Pressable, Text, StyleSheet } from 'react-native'
function CategoryGridTitle({ title, color, onPress }) {
    return (
        <View style={[styles.gridItem, { backgroundColor: color }]}>
            <Pressable
                style={styles.button}
                android_ripple={{ color: '#ccc' }}
                onPress={onPress}
            >
                <View style={styles.innerContainer}>
                    <Text style={styles.tittle}>{title}</Text>
                </View>
            </Pressable>
        </View>
    )
}

export default CategoryGridTitle

const styles = StyleSheet.create({
    gridItem: {
        flex: 1,
        margin: 16,
        height: 150,
        borderRadius: 8,
        elevation: 4,
        overflow: 'hidden'
    },
    button: {
        flex: 1
    },
    buttonPressed: {
        opacity: 0.5
    },
    innerContainer: {
        flex: 1,
        padding: 16,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8
    },
    tittle: {
        fontWeight: 'bold',
        fontSize: 18
    }
})