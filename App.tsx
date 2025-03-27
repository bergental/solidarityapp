import { StatusBar } from "react-native";
import { useFonts, Roboto_400Regular, Roboto_700Bold } from "@expo-google-fonts/roboto";
import { GluestackUIProvider, Text, Center } from "@gluestack-ui/themed";
import { config } from "@gluestack-ui/config";

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold
  });
  
  return (
    <GluestackUIProvider config={config}>
      <Center 
        flex={1}
        bg="#202024"
      >
        <StatusBar 
          barStyle="light-content" 
          backgroundColor="transparent" 
          translucent 
        />
        
        {fontsLoaded ? <Text >Solidário</Text> : <></>}
      </Center>
    </GluestackUIProvider>
  );
}