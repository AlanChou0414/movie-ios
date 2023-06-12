import { Loading } from '@Components/loading.component'
import { ScrollList } from '@Components/scrollList.component'
import { PopupSearchResults, SearchBar } from '@Components/search.component'
import useApi from '@Hooks/api.hook'
import { styles } from '@Styles/styles'
import { RootType } from '@Types/reducer'
import { Center, Heading, ScrollView, VStack } from 'native-base'
import { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useSelector } from 'react-redux'

const PageMain = () => {
  const api = useApi()
  const search = useSelector((state: RootType) => state.Search)
  const inputValue = useSelector((state: RootType) => state.Form.inputValue)
  const [popular, setPopular] = useState<ResultProps>()


  useEffect(() => {
    const fetchData = async () => {
      const data = await api.useFetchSearchAll()
      setPopular(data)
    }
    fetchData()
  }, [])

  if (!popular) return <Loading />

  return (
    <SafeAreaView style={styles.flex}>
      <SearchBar />
      <ScrollView>
        <VStack mx='5'>
          <Center>
            <Heading size="xl" mt="3">
              現正熱映
            </Heading>
            {<ScrollList data={popular} horizontal={true} />}
          </Center>
          <Center>
            <Heading size="xl" mt="3">
              人氣電影
            </Heading>
            {<ScrollList data={popular} horizontal={true} />}
          </Center>
          <Center>
            <Heading size="xl" mt="3">
              我的收藏
            </Heading>
            {<ScrollList data={popular} horizontal={true} />}
          </Center>
        </VStack>
      </ScrollView>
      {search.page && <PopupSearchResults data={search} />}
    </SafeAreaView >
  )
}

export default PageMain