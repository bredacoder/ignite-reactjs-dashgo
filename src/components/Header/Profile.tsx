import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData?: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">
      { showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Daniel Felipe</Text>
          <Text color="gray.300" fontSize="small">
            danielfelipedeveloper@gmail.com
          </Text>
        </Box>
      )}

      <Avatar size="md" name="Daniel Felipe" src="https://github.com/danielfelipedeveloper.png" />
    </Flex>
  );
};
