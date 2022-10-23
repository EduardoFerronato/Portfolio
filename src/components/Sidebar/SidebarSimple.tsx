import React, { ReactNode } from 'react';
import {
  Box,
  useColorModeValue,
  Drawer,
  DrawerContent,
  useDisclosure,
  useBreakpointValue,
  Flex,
} from '@chakra-ui/react';

import { SidebarContent } from './SidebarContent';
import { MobileNav } from './MobileNav';

export default function SideBarSimple() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const bgColor = useColorModeValue('gray.100', 'gray.900')

  const isMobileScreen = useBreakpointValue({
    base: true,
    lg: false
  })

  if (isMobileScreen) {
    return (
      <Box minH="100vh" position={"fixed"} top="0" left="0">
        <Drawer
          autoFocus={false}
          isOpen={isOpen}
          placement="left"
          onClose={onClose}
          returnFocusOnClose={false}
          onOverlayClick={onClose}
          size="full">
          <DrawerContent>
            <SidebarContent onClose={onClose} />
          </DrawerContent>
        </Drawer>
        <MobileNav display={{ base: 'flex', md: 'none' }} onOpen={onOpen} />
      </Box>
    );
  }
  return (
    <Flex maxH="100vh" flexDir={"column"} minW="350px" bg={bgColor}>
      <SidebarContent
        onClose={() => onClose}
        display={{ base: 'none', md: 'block' }}
      />
      <MobileNav display={{ base: 'flex', md: 'none' }} onOpen={onOpen} />
    </Flex>
  );
}


