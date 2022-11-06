import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

export function Profile() {
  return (
    <Flex align="center">
      <Box mr="4" textAlign="right">
        <Text>Daniel Felipe</Text>
        <Text color="gray.300" fontSize="small">
          danielfelipedeveloper@gmail.com
        </Text>
      </Box>

      <Avatar size="md" name="Daniel Felipe" src="https://github.com/danielfelipedeveloper.png" />
    </Flex>
  );
};
