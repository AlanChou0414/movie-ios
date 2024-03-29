import useApi from "@Hooks/api.hook"
import useIcon from "@Hooks/icon.hook"
import { Icon, Input, KeyboardAvoidingView, VStack } from "native-base"
import { useState } from "react"
import { Keyboard, Platform, TouchableWithoutFeedback } from "react-native"

const SearchBar = () => {
  const icon = useIcon()
  const api = useApi()
  const [searchValue, setSearchValue] = useState('')

  const handleSearchSubmit = async () => {
    try {
      const { data, refresh } = api.useFetchSearch(searchValue)
      console.log(data)
    } catch (error) {
      return
    }
    setSearchValue('')
  }

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <KeyboardAvoidingView
        h={{
          base: "400px",
          lg: "auto"
        }}
        mt="5"
        flex={1}
        behavior={Platform.OS === 'ios' ? "padding" : "height"}
      >
        <VStack alignSelf="center" width="100%" maxW={300}>
          <Input
            placeholder="找電影"
            width="100%"
            borderRadius="5"
            py="2"
            px=".5"
            fontSize="16"
            letterSpacing="md"
            InputLeftElement={
              <Icon m="2" ml="3" size="6" color="gray.400" as={icon.searchIcon()} />
            }
            InputRightElement={
              <Icon m="2" mr="3" size="6" color="gray.400" as={icon.micIcon()} />
            }
            returnKeyType="search"
            onSubmitEditing={handleSearchSubmit}
            onChangeText={setSearchValue}
          />
        </VStack >
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  )
}

export default SearchBar