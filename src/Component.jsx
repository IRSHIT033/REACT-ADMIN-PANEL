import React from "react";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  Center,
  useDisclosure,
  Flex,
  Spacer,
  Heading,
  Box,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import Users from "./Components/Users";
import UserList from "./Components/UserList";
import AudioroomLists from "./Components/AudioroomLists";
import VideoRoomLists from "./Components/VideoRoomLists";
import PostContainer from "./Components/PostContainer";
import comments from "./Components/comments";

const Component = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  return (
    <>
      <Flex alignItems="center" justifyContent="space-around">
        <Box>
          <Button ref={btnRef} colorScheme="teal" onClick={onOpen} margin={4}>
            <HamburgerIcon w={8} h={7} />
          </Button>
        </Box>
        <Spacer />
        <Box p="2">
          <Heading size="xl">Admin Panel</Heading>
        </Box>
        <Spacer />
      </Flex>
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader></DrawerHeader>

          <DrawerBody></DrawerBody>

          <DrawerFooter></DrawerFooter>
        </DrawerContent>
      </Drawer>
      <Box px="5" py={2}>
        <Heading size="xxl" p={2} size>
          USER LIST
        </Heading>
        <UserList />
      </Box>
      <Box px="5" py={2}>
        <Heading size="xxl" p={2} size>
          Audio Rooms
        </Heading>
        <AudioroomLists />
      </Box>
      <Box px="5" py={2}>
        <Heading size="xxl" p={2} size>
          Video Rooms
        </Heading>
        <VideoRoomLists />
      </Box>
      <Box px="5" py={2}>
        <Heading size="xxl" p={2} size>
          Posts
        </Heading>
        <PostContainer />
        <comments />
      </Box>
    </>
  );
};

export default Component;
