import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import UserProfile180022Navigator from '../features/UserProfile180022/navigator';
import Maps180003Navigator from '../features/Maps180003/navigator';
import Settings179981Navigator from '../features/Settings179981/navigator';
import Settings179966Navigator from '../features/Settings179966/navigator';
import NotificationList179965Navigator from '../features/NotificationList179965/navigator';
import Maps179964Navigator from '../features/Maps179964/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
UserProfile180022: { screen: UserProfile180022Navigator },
Maps180003: { screen: Maps180003Navigator },
Settings179981: { screen: Settings179981Navigator },
Settings179966: { screen: Settings179966Navigator },
NotificationList179965: { screen: NotificationList179965Navigator },
Maps179964: { screen: Maps179964Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
