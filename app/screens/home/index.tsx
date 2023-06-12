import { Loading } from '@Components/loading.component'
import { ScrollList } from '@Components/scrollList.component'
import { SearchBar } from '@Components/search.component'
import useApi from '@Hooks/api.hook'
import { styles } from '@Styles/styles'
import { Center, Heading, ScrollView, VStack } from 'native-base'
import { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const PageMain = () => {
  const api = useApi()
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
            <Heading size="xl" mt="3" color="light.100">
              現正熱映
            </Heading>
            {<ScrollList data={popular} horizontal={true} w={250} h={180} />}
          </Center>
          <Center>
            <Heading size="xl" mt="3" color="light.100">
              人氣電影
            </Heading>
            {<ScrollList data={popular} horizontal={true} w={250} h={180} />}
          </Center>
          <Center>
            <Heading size="xl" mt="3" color="light.100">
              我的收藏
            </Heading>
            {<ScrollList data={popular} horizontal={true} w={250} h={180} />}
          </Center>
        </VStack>
      </ScrollView>
    </SafeAreaView >
  )
}

export default PageMain