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
  const [topRated, setTopRated] = useState<ResultProps>()
  const [nowPlaying, setNowPlaying] = useState<ResultProps>()
  const [upcoming, setUpcoming] = useState<ResultProps>()
  const [popular, setPopular] = useState<ResultProps>()


  useEffect(() => {
    const fetchData = async () => {
      const top = await api.useFetchTopRated()
      const now = await api.useFetchNowPlaying()
      const coming = await api.useFetchUpcoming()
      const pop = await api.useFetchPopular()
      setTopRated(top)
      setNowPlaying(now)
      setUpcoming(coming)
      setPopular(pop)
    }
    fetchData()
  }, [])

  if (!topRated) return <Loading />

  return (
    <SafeAreaView style={styles.flex}>
      <SearchBar />
      <ScrollView>
        <VStack mx='5'>
          <Center>
            <Heading size="xl" mt="3" color="light.100">
              即將上映
            </Heading>
            {<ScrollList data={upcoming} horizontal={true} w={250} h={180} />}
          </Center>
          <Center>
            <Heading size="xl" mt="3" color="light.100">
              現正熱映
            </Heading>
            {<ScrollList data={nowPlaying} horizontal={true} w={250} h={180} />}
          </Center>
          <Center>
            <Heading size="xl" mt="3" color="light.100">
              高評分
            </Heading>
            {<ScrollList data={topRated} horizontal={true} w={250} h={180} />}
          </Center>
          <Center>
            <Heading size="xl" mt="3" color="light.100">
              高人氣
            </Heading>
            {<ScrollList data={topRated} horizontal={true} w={250} h={180} />}
          </Center>
        </VStack>
      </ScrollView>
    </SafeAreaView >
  )
}

export default PageMain