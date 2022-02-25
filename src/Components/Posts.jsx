import React, { useState } from "react";
import {
  Image,
  Box,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  Button,
} from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";

const Posts = () => {
  const [likes, setLikes] = useState();
  const [Followers, setFollowers] = useState();
  const property = {
    imageUrl: "https://bit.ly/2Z4KKcF",
    imageAlt: "Rear view of modern home with pool",
    Likes: 3,
    Followers: 2,
    title: "POST 1",

    reviewCount: 34,
    rating: 4,
  };

  const updateLikes = (e) => {
    e.preventDefault();
    console.log(likes);
    property.Likes = likes;
  };
  const updateFollowers = (e) => {
    e.preventDefault();
    console.log(Followers);
    property.Followers = Followers;
  };
  const Deletepost = () => {};

  return (
    <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
      <Image src={property.imageUrl} alt={property.imageAlt} />

      <Box p="6">
        <Box m="2" fontWeight="semibold" as="h4" lineHeight="tight" isTruncated>
          {property.title}
        </Box>
        <Box display="flex" alignItems="baseline">
          <Box
            color="gray.500"
            fontWeight="semibold"
            letterSpacing="wide"
            fontSize="xs"
            textTransform="uppercase"
            ml="2"
          >
            {property.Likes} Likes &bull; {property.Followers} Followers
          </Box>
        </Box>

        <Box display="flex" mt="2" alignItems="center">
          {Array(5)
            .fill("")
            .map((_, i) => (
              <StarIcon
                key={i}
                color={i < property.rating ? "teal.500" : "gray.300"}
              />
            ))}
          <Box as="span" ml="2" color="gray.600" fontSize="sm">
            {property.reviewCount} reviews
          </Box>
        </Box>
        <Box p={2}>
          <FormControl>
            <FormLabel htmlFor="name">Enter likes</FormLabel>
            <Input
              id="name"
              type="text"
              onChange={(e) => setLikes(e.target.value)}
            />
            <Button m={1} onClick={updateLikes} colorScheme="teal">
              update
            </Button>
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="name">Enter Followers</FormLabel>
            <Input
              id="name"
              type="text"
              onChange={(e) => setFollowers(e.target.value)}
            />
            <Button m={1} onClick={updateFollowers} colorScheme="teal">
              Update
            </Button>
            <br />
            <Button m={1} onClick={Deletepost} colorScheme="red">
              Delete post
            </Button>
          </FormControl>
        </Box>
      </Box>
    </Box>
  );
};

export default Posts;
