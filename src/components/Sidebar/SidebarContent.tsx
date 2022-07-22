import { Avatar, Box, BoxProps, CloseButton, Flex, Link} from "@chakra-ui/react";
import { IconType } from "react-icons";
import { FiHome } from "react-icons/fi";

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
    <Box>
      <Flex h="auto" alignItems="center" mx="25%" my="8" justifyContent="space-between">
        <Avatar size='2xl' name="Eduardo" src="/profile.png"/>
        <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} />
      </Flex>
      <Flex bg="blue.500" flexDir="column">
        <Flex bg="red.900">
          <Link isExternal _hover={{textDecoration:"none"}} href="https://www.linkedin.com/in/eduardoferronato">linkedin</Link>
        </Flex>
        <Flex>
          <Link isExternal _hover={{textDecoration:"none"}} href="https://github.com/EduardoFerronato">GitHub</Link>
        </Flex>
      </Flex>
    </Box>
  );
};
