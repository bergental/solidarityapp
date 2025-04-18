import { StatusBar } from "react-native";
import { useFonts, Roboto_400Regular, Roboto_700Bold } from "@expo-google-fonts/roboto";
import { GluestackUIProvider, Text, Center } from "@gluestack-ui/themed";

import { config } from './config/gluestack-ui.config';
import { Loading } from "@components/Loading";

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold
  });
  
  return (
    <GluestackUIProvider config={config}>
      <Center 
        flex={1}
        bg="$gray700"
      >
        <StatusBar 
          barStyle="light-content" 
          backgroundColor="transparent" 
          translucent 
        />
        
        {fontsLoaded ? <Text >Solidário</Text> : <Loading />}
      </Center>
    </GluestackUIProvider>
  );
}