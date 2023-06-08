import useApi from "@Hooks/api.hook"
import useIcon from "@Hooks/icon.hook"
import { clearInputValue, setInputValue } from "@Slice/form.slice"
import { removeSearchResult, setSearchResult } from "@Slice/search.slice"
import { RootType } from "@Types/reducer"
import { Icon, Input, View } from "native-base"
import { Keyboard, TouchableWithoutFeedback } from "react-native"
import { useDispatch, useSelector } from "react-redux"

export const SearchBar = () => {
  const icon = useIcon()
  const api = useApi()
  const dispatch = useDispatch()
  const inputValue = useSelector((state: RootType) => state.Form.inputValue)

  const handleSearchSubmit = async () => {
    if (!inputValue) return
    try {
      const data = await api.useFetchSearch(inputValue)
      dispatch(setSearchResult(data))
    } catch (error) {
      return
    }
  }

  const handleSearchRemove = () => {
    dispatch(clearInputValue())
    dispatch(removeSearchResult())
  }

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()} >
      <View px="10">
        <Input
          value={inputValue}
          placeholder="找電影"
          width="100%"
          borderRadius="10"
          px=".5"
          fontSize="16"
          letterSpacing="md"
          InputLeftElement={
            <Icon m="2" ml="3" size="6" color="gray.400"
              as={icon.searchIcon()} />
          }
          InputRightElement={
            <Icon m="2" mr="3" size="6" as={icon.cancelIcon('gray.400')}
              onPress={handleSearchRemove} />
          }
          returnKeyType="search"
          onSubmitEditing={handleSearchSubmit}
          onChangeText={text => dispatch(setInputValue(text))}
        />
      </View>
    </TouchableWithoutFeedback>
  )
}