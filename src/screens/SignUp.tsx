import { useState } from "react";
import {
  Center,
  Heading,
  Image,
  ScrollView,
  VStack,
  Button as GluestackButton,
  ButtonGroup,
  Text,
  set
} from "@gluestack-ui/themed";

import BackgroundImg from "@assets/background.png";
import Logo from "@assets/logo.svg";
import { Input } from "@components/Input";
import { Button } from "@components/Button";

export function SignUp() {
  const [value, setValue] = useState("D");

  const buttonChoice = (key: string, title: string) => {
    return (
      <GluestackButton
        key={key}
        h="$12"
        w="45%"
        bg={value === key ? "$green700" : "$gray400"}
        rounded="$sm"
        $active-bg={value === key ? "$green500" : "$gray400"}
        onPress={() => setValue(key)}
      >
        <Text
          color={"$white"}
          fontFamily="$heading"
          fontSize="$sm"
        >
          {title}
        </Text>
      </GluestackButton>
    )
  }

  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      showsVerticalScrollIndicator={false}
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

          <Center flex={1} gap="$2">
            <Heading color="$gray100">Crie sua conta</Heading>

            <Input placeholder="Nome" />

            <Input 
              placeholder="CPF/CNPJ" 
              inputMode="numeric"
            />

            <Input
              placeholder="E-mail"
              keyboardType="email-address"
              autoCapitalize="none"
            />
            
            <Input placeholder="Senha" secureTextEntry />

            <ButtonGroup
              w="$full"
              h="$14"
              bg="$gray700"
              rounded="$sm"
              alignItems="center"
              justifyContent="space-around"
            >
              {
                [['D', 'Doador'], ['I', 'Instituição']].map(([key, title]) => (
                  buttonChoice(key, title)
                ))
              }
            </ButtonGroup>

            <Button title="Criar e acessar" />
          </Center>

          <Button title="Voltar para o login" variant="outline" mt="$12" />
        </VStack>
      </VStack>
    </ScrollView>
  )
}