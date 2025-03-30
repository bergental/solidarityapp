import { 
  Center, 
  Heading, 
  Image, 
  ScrollView, 
  Text, 
  VStack 
} from "@gluestack-ui/themed";

import BackgroundImg from "@assets/background.png";
import Logo from "@assets/logo.svg";

import { Input } from "@components/Input";
import { Button } from "@components/Button";


export function SignIn() {

  return (
    <ScrollView 
      contentContainerStyle={{ flexGrow: 1 }}
      showsVerticalScrollIndicator={false}
      w="$full"
    >
      <VStack flex={1} bg="$gray700">
        <Image 
          source={BackgroundImg}
          defaultSource={BackgroundImg}
          h="$full"
          w="$full"
          alt="Pessoa doando alimentos"
          position="absolute"
        />
        <VStack flex={1} px="$10" pb="$16">
          <Center my="$24">
            <Logo />
          </Center>

          <Center gap="$2">
            <Heading color="$gray100">Acesse sua conta</Heading>

            <Input 
              placeholder="E-mail" 
              keyboardType="email-address" 
              autoCapitalize="none"
            />

            <Input placeholder="Senha" secureTextEntry />

            <Button title="Acessar" />
          </Center>

          <Center flex={1} justifyContent="flex-end" marginTop="$4">
            <Text color="$gray100" fontSize="$sm" mb="$3" fontFamily="$body">
              Ainda não tem acesso?
            </Text>

            <Button title="Criar conta" variant="outline" />
          </Center>
        </VStack>
      </VStack>
    </ScrollView>
  );
}