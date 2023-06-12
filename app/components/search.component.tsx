import useAlert from "@Hooks/alert.hook"
import useApi from "@Hooks/api.hook"
import useDirect from "@Hooks/direct.hook"
import useIcon from "@Hooks/icon.hook"
import { clearInputValue, setInputValue } from "@Slice/form.slice"
import { removeSearchResult, setSearchResult } from "@Slice/search.slice"
import { RootType } from "@Types/reducer"
import { Icon, Input, View } from "native-base"
import { useState } from "react"
import { ActivityIndicator, Keyboard, TouchableWithoutFeedback } from "react-native"
import { useDispatch, useSelector } from "react-redux"

export const SearchBar = () => {
  const icon = useIcon()
  const api = useApi()
  const alert = useAlert()
  const dispatch = useDispatch()
  const direct = useDirect()
  const inputValue = useSelector((state: RootType) => state.Form.inputValue)
  const [isSearching, setIsSearching] = useState(false)

  const handleSearch = async () => {
    const value = inputValue.trim()
    if (!value) {
      alert.error('請輸入搜尋文字')
      return dispatch(removeSearchResult())
    }
    alert.warning('搜尋中...')
    try {
      setIsSearching(true)
      const data = await api.useFetchSearch(value)
      if (data.results.length === 0) return alert.error('沒有搜尋結果')
      dispatch(setSearchResult(data))
    } catch (error) {
      return
    } finally {
      setIsSearching(false)
      direct.goSearch()
    }
  }

  const handleRemove = () => {
    dispatch(clearInputValue())
    dispatch(removeSearchResult())
  }

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View px="10">
        <Input
          value={inputValue}
          placeholder="找電影"
          width="100%"
          borderRadius="10"
          px=".5"
          fontSize="16"
          letterSpacing="md"
          color="light.100"
          InputLeftElement={
            isSearching
              ? (
                <View m="2" ml="3" size="6">
                  <ActivityIndicator size="small" color="light.50" />
                </View>
              )
              : <Icon m="2" ml="3" size="6" color="gray.400"
                as={icon.searchIcon()} />
          }
          InputRightElement={
            inputValue
              ? <Icon m="2" mr="3" size="6" as={icon.cancelIcon('gray.400')}
                onPress={handleRemove} />
              : undefined
          }
          onChangeText={(text) => dispatch(setInputValue(text))}
          onSubmitEditing={handleSearch}
          returnKeyType="search"
        />
      </View>
    </TouchableWithoutFeedback>
  )
}