import { createStackNavigator, createAppContainer } from 'react-navigation'
import HomeScreen from './Screens/Home'
import GeoLocationScreen from './Screens/GeoLocation'
import GesturesScreen from './Screens/Gestures'
import GyroscopeScreen from './Screens/Gyroscope'
import AccelerometerScreen from './Screens/Accelerometer'

const AppNavigator = createStackNavigator({
  Home: HomeScreen,
  GeoLocation: GeoLocationScreen,
  Gestures: GesturesScreen,
  Gyroscope: GyroscopeScreen,
  Accelerometer: AccelerometerScreen
})

export default createAppContainer(AppNavigator)
