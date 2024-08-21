import { useContext } from "react";
import { StyleSheet, Text, View } from "react-native";
import { FavoritesContext } from "../store/context/favourites-context";
import { MEALS } from "../data/dummy-data";
import MealsList from "../components/MealList/MealsList";

function FavoritesScreen() {
    const favouriteMealsCtx = useContext(FavoritesContext)
    const favouriteMeals = MEALS.filter(meal => favouriteMealsCtx.ids.includes(meal.id))

    if (favouriteMeals.length === 0) {
        return (
            <View style={styles.rootContainer}>
                <Text style={styles.text}>you have no favourite Meals Yet</Text>
            </View>
        )
    }
    return <MealsList items={favouriteMeals} />

}

export default FavoritesScreen

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white'
    }
})