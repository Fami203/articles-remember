import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { HomeScreen } from "./Home";
import { FullPostScreen } from "./FullPost";

const Stack = createNativeStackNavigator();

export const Navigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={HomeScreen} options={{title: 'Новости'}}/>
                <Stack.Screen name="FullPost" component={FullPostScreen} options={{title: 'Статья'}}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
};