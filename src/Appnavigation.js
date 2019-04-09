import { createStackNavigator, createAppContainer,DrawerNavigator } from 'react-navigation';
import Home from './home';
const MainNavigator = createStackNavigator({
    home: { screen: Home, navigationOptions: { header: null } },
});
const Appnavigation = createAppContainer(MainNavigator);
export default Appnavigation;