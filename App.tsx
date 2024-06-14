import Loading from '@/app/components/loading';
import Home from '@/app/pages/home';
import { StatusBar } from "react-native"

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
    <>
    <StatusBar backgroundColor={'transparent'} translucent/>
    <Home/>
    </>
  );
}

