import useIcon from "@Hooks/icon.hook"
import { Box, Button, Center, Text, useToast } from "native-base"


const useAlert = () => {
  const toast = useToast()
  const icon = useIcon()

  const successToast = (content: string) => {
    toast.show({
      render: () => {
        return (
          <Box bg="success.500" px="1" py="1" rounded="lg" mt={.5}>
            <Center textAlign="center">
              <Button colorScheme="null" rightIcon={icon.cancelIcon('success.50')} onPress={toast.closeAll}>
                <Text color="primary.50" fontSize="sm" fontWeight="bold">
                  {content}
                </Text>
              </Button>
            </Center>
          </Box>
        )
      },
      duration: 1500,
      placement: "top"
    })
  }

  const errorToast = (content: string) => {
    toast.show({
      render: () => {
        return (
          <Box bg="error.500" px="1" py="1" rounded="lg" mt={.5}>
            <Center textAlign="center">
              <Button colorScheme="null" rightIcon={icon.cancelIcon('success.50')} onPress={toast.closeAll}>
                <Text color="primary.50" fontSize="sm" fontWeight="bold">
                  {content}
                </Text>
              </Button>
            </Center>
          </Box>
        )
      },
      duration: 1500,
      placement: "top"
    })
  }
  return {
    success: (content: string) => successToast(content),
    error: (content: string) => errorToast(content)
  }
}

export default useAlert