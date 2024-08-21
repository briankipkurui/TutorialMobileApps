import { FlatList } from 'react-native'
import { CATEGORIES } from '../data/dummy-data'
import CategoryGridTitle from '../components/CategoryGridTitle'


function CategoriesScreen({ navigation }) {

    function renderCategoryItem(itemData) {

        function pressHndler() {
            navigation.navigate('MealsOverview', {
                categoryId: itemData.item.id
            })
        }
        return (
            <CategoryGridTitle
                title={itemData.item.title}
                color={itemData.item.color}
                onPress={pressHndler}
            />
        )
    }
    return (
        <FlatList
            data={CATEGORIES}
            keyExtractor={(item) => item.id}
            renderItem={renderCategoryItem}
            numColumns={2}
        />
    )
}
export default CategoriesScreen