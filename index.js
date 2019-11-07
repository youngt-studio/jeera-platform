/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './src/native/index';
import {name as appName} from './app.json';

console.disableYellowBox = true;
AppRegistry.registerComponent(appName, () => App);
