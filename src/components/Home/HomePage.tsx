import { Flex, Text, Link } from "@chakra-ui/react"
import SidebarSimple from "../Sidebar/SidebarSimple"
import { Header } from "./Header"
import { Icon } from '@iconify/react';

export const HomePage = () => {
  return (
    <Flex>
      <SidebarSimple />
      <Flex flexDir="column">
        <Header/>
        <Flex flexDir="column">
          <Flex flexDir="column" mx="50" mb="5">
            <Flex align="center">
              <Icon icon="bi:person" height="40" />
              <Text marginLeft="5" fontSize="3xl" >Sobre min:</Text>
            </Flex>
            <Text>Apaixonado por tecnologia e evoluir. </Text>
            <Text>Com o objetivo de aprimorar
               minhas habilidades na área da Programação e consolidar um plano de carreira sustentável.</Text>
          </Flex>
          <Flex flexDir="column" mx="50" my="5">
            <Flex align="center">
              <Icon icon="ant-design:desktop-outlined" height="40" />
              <Text marginLeft="5" fontSize="3xl" >Projetos:</Text>
            </Flex>
            <Link href="https://dash-ox6g45dz3-eduardoferronato.vercel.app/">
              <Text>Dash-go</Text>
            </Link>
            <Link href="https://site-dinamica-balanceamentos.vercel.app/">
              <Text>Dinâmica Balanceamentos</Text>
            </Link>
          </Flex>
          <Flex flexDir="column" mx="50" my="5">
            <Flex align="center">
              <Icon icon="raphael:books" height="40" />
              <Text marginLeft="5" fontSize="3xl" >Tecnologias:</Text>
            </Flex>
            <Text>React | Next.JS</Text>
            <Text>React Native</Text>
            <Text>React Native</Text>
            <Text>ChakraUI</Text>
            <Text>Node.JS</Text>
            <Text>JavaScript</Text>
            <Text>TypeScript</Text>
            <Text>Figma (Prototipação UI)</Text>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  )
}
