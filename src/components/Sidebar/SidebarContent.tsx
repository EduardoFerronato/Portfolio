import { Avatar, Box, BoxProps, CloseButton, Flex, Link, Text } from "@chakra-ui/react";
import { IconType } from "react-icons";
import { FiHome } from "react-icons/fi";
import { Icon } from '@iconify/react';

interface LinkItemProps {
  name: string;
  icon: IconType;
}

const LinkItems: Array<LinkItemProps> = [
  { name: 'Home', icon: FiHome },
];

interface SidebarProps extends BoxProps {
  onClose: () => void;
}

export const SidebarContent = ({ onClose, ...rest }: SidebarProps) => {
  return (
    <Box >
      <Flex h="auto" alignItems="center"  my="8" justifyContent="center">
        <Avatar size='2xl' name="Eduardo" src="/profile.png" />
        <CloseButton right={5} top={5} display={{ base: 'flex', md: 'none' }} position={"fixed"} onClick={onClose} />
      </Flex>
      <Flex flexDir="column">
        <Flex bg="#24292D" h="20" mx="5" my="3" borderRadius="5">
          <Link
            display="flex"
            flexDir="row"
            h="100%"
            w="100%"
            alignItems="center"
            justifyContent="space-around"
            fontSize="25"
            isExternal _hover={{ textDecoration: "none" }}
            href="https://github.com/EduardoFerronato"
          >
            <Icon icon="akar-icons:github-fill" height="40" />
            <Text>GitHub</Text>
          </Link>
        </Flex>
        <Flex bg="#0071AE" h="20" mx="5" my="3" borderRadius="5">
          <Link
            display="flex"
            flexDir="row"
            h="100%"
            w="100%"
            alignItems="center"
            justifyContent="space-around"
            fontSize="25"
            isExternal _hover={{ textDecoration: "none" }}
            href="https://www.linkedin.com/in/eduardoferronato"
          >
            <Icon icon="akar-icons:linkedin-box-fill" height="40" />
            <Text>LinkedIn</Text>
          </Link>
        </Flex>
      </Flex>
    </Box>
  );
};
