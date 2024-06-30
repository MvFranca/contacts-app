import Loading from '@/app/components/loading';
import Home from '@/app/pages/home';
import { StatusBar } from "react-native"
import { GestureHandlerRootView } from "react-native-gesture-handler"

import {useFonts, Ubuntu_400Regular, Ubuntu_500Medium, Ubuntu_700Bold} from '@expo-google-fonts/ubuntu'

export default function App() {

  const [fontsLoaded] = useFonts({
    Ubuntu_400Regular,
    Ubuntu_500Medium,
    Ubuntu_700Bold
  })

  if(!fontsLoaded){
    return <Loading/>
  }

  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <StatusBar backgroundColor={'transparent'} translucent/>
      <Home/>
    </GestureHandlerRootView>
  );
}

