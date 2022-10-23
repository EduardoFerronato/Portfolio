import { Flex, Text, Link, Box } from "@chakra-ui/react"
import SidebarSimple from "../Sidebar/SidebarSimple"
import { Header } from "./Header"
import { Icon } from '@iconify/react';

export const HomePage = () => {
  return (
    <Flex>
      <Flex width="100%" height="100%" >
        <SidebarSimple />
        <Flex pb="100px" flexDir="column" overflow="auto" maxH="100vh" w="100%">
          <Header />
          <Flex flexDir="column">
            <Flex flexDir="column" mx="50" mb="5">
              <Flex align="center">
                <Icon icon="bi:person" height="40" />
                <Text marginLeft="5" fontSize="3xl" >Sobre min:</Text>
              </Flex>
              <Box marginLeft="60px" mt="10px">
                <Text>Apaixonado por tecnologia e evoluir. </Text>
                <Text>Com o objetivo de aprimorar
                  minhas habilidades na área da Programação e consolidar um plano de carreira sustentável.</Text>
              </Box>
            </Flex>
            <Flex flexDir="column" mx="50" my="5">
              <Flex align="center">
                <Icon icon="ant-design:desktop-outlined" height="40" />
                <Text marginLeft="5" fontSize="3xl" >Projetos:</Text>
              </Flex>
              <Box marginLeft="60px" mt="10px">
                <Link href="https://dash-ox6g45dz3-eduardoferronato.vercel.app/">
                  <Text>Dash-go</Text>
                </Link>
                <Link href="https://site-dinamica-balanceamentos.vercel.app/">
                  <Text>Dinâmica Balanceamentos</Text>
                </Link>
              </Box>
            </Flex>
            <Flex flexDir="column" mx="50" my="5">
              <Flex align="center">
                <Icon icon="raphael:books" height="40" />
                <Text marginLeft="5" fontSize="3xl" >Tecnologias:</Text>
              </Flex>
              <Box marginLeft="60px" mt="10px">
                <Flex>
                  <Box>
                    <Text>React | Next.JS</Text>
                    <Text mt="0.4rem">React Native</Text>
                    <Text mt="0.4rem">ChakraUI</Text>
                    <Text mt="0.4rem">Node.JS</Text>
                    <Text mt="0.4rem">JavaScript</Text>
                    <Text mt="0.4rem">TypeScript</Text>
                    <Text mt="0.4rem">Figma (Prototipação UI)</Text>
                  </Box>
                  <Box ml="10px">
                    <Flex>
                      <Text>-</Text>
                      <Icon icon="bi:star-fill" height="20" style={{ marginLeft: "10px", color: "#005DCC" }} />
                      <Icon icon="bi:star-fill" height="20" style={{ marginLeft: "5px", color: "#005DCC" }} />
                      <Icon icon="bi:star-fill" height="20" style={{ marginLeft: "5px", color: "#005DCC" }} />
                      <Icon icon="bi:star-fill" height="20" style={{ marginLeft: "5px", color: "#005DCC" }} />
                      <Icon icon="bi:star-fill" height="20" style={{ marginLeft: "5px" }} />
                    </Flex>
                    <Flex mt="0.4rem">
                      <Text>-</Text>
                      <Icon icon="bi:star-fill" height="20" style={{ marginLeft: "10px", color: "#005DCC" }} />
                      <Icon icon="bi:star-fill" height="20" style={{ marginLeft: "5px", color: "#005DCC" }} />
                      <Icon icon="bi:star-fill" height="20" style={{ marginLeft: "5px" }} />
                      <Icon icon="bi:star-fill" height="20" style={{ marginLeft: "5px" }} />
                      <Icon icon="bi:star-fill" height="20" style={{ marginLeft: "5px" }} />
                    </Flex>
                    <Flex mt="0.4rem">
                      <Text>-</Text>
                      <Icon icon="bi:star-fill" height="20" style={{ marginLeft: "10px", color: "#005DCC" }} />
                      <Icon icon="bi:star-fill" height="20" style={{ marginLeft: "5px", color: "#005DCC" }} />
                      <Icon icon="bi:star-fill" height="20" style={{ marginLeft: "5px", color: "#005DCC" }} />
                      <Icon icon="bi:star-fill" height="20" style={{ marginLeft: "5px", color: "#005DCC" }} />
                      <Icon icon="bi:star-fill" height="20" style={{ marginLeft: "5px" }} />
                    </Flex>
                    <Flex mt="0.4rem">
                      <Text>-</Text>
                      <Icon icon="bi:star-fill" height="20" style={{ marginLeft: "10px", color: "#005DCC" }} />
                      <Icon icon="bi:star-fill" height="20" style={{ marginLeft: "5px", color: "#005DCC" }} />
                      <Icon icon="bi:star-fill" height="20" style={{ marginLeft: "5px", color: "#005DCC" }} />
                      <Icon icon="bi:star-fill" height="20" style={{ marginLeft: "5px" }} />
                      <Icon icon="bi:star-fill" height="20" style={{ marginLeft: "5px" }} />
                    </Flex>
                    <Flex mt="0.4rem">
                      <Text>-</Text>
                      <Icon icon="bi:star-fill" height="20" style={{ marginLeft: "10px", color: "#005DCC" }} />
                      <Icon icon="bi:star-fill" height="20" style={{ marginLeft: "5px", color: "#005DCC" }} />
                      <Icon icon="bi:star-fill" height="20" style={{ marginLeft: "5px", color: "#005DCC" }} />
                      <Icon icon="bi:star-fill" height="20" style={{ marginLeft: "5px" }} />
                      <Icon icon="bi:star-fill" height="20" style={{ marginLeft: "5px" }} />
                    </Flex>
                    <Flex mt="0.4rem">
                      <Text>-</Text>
                      <Icon icon="bi:star-fill" height="20" style={{ marginLeft: "10px", color: "#005DCC" }} />
                      <Icon icon="bi:star-fill" height="20" style={{ marginLeft: "5px", color: "#005DCC" }} />
                      <Icon icon="bi:star-fill" height="20" style={{ marginLeft: "5px", color: "#005DCC" }} />
                      <Icon icon="bi:star-fill" height="20" style={{ marginLeft: "5px", color: "#005DCC" }} />
                      <Icon icon="bi:star-fill" height="20" style={{ marginLeft: "5px" }} />
                    </Flex>
                    <Flex mt="0.4rem">
                      <Text>-</Text>
                      <Icon icon="bi:star-fill" height="20" style={{ marginLeft: "10px", color: "#005DCC" }} />
                      <Icon icon="bi:star-fill" height="20" style={{ marginLeft: "5px", color: "#005DCC" }} />
                      <Icon icon="bi:star-fill" height="20" style={{ marginLeft: "5px", color: "#005DCC" }} />
                      <Icon icon="bi:star-fill" height="20" style={{ marginLeft: "5px", color: "#005DCC" }} />
                      <Icon icon="bi:star-fill" height="20" style={{ marginLeft: "5px" }} />
                    </Flex>
                  </Box>
                </Flex>
              </Box>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  )
}
