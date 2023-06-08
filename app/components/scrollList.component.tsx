import { styles } from "@Styles/styles"
import { IMG } from "@env"
import { Box, FlatList, Heading } from "native-base"
import { useEffect, useState } from "react"
import { ImageBackground } from "react-native"
import { Loading } from "./loading.component"

export const ScrollList = ({ data }: any) => {
  const [list, setList] = useState<ResultProps>();

  useEffect(() => {
    const fetchData = async () => {
      const getList = await data
      setList(getList)
    }
    fetchData()
  }, [data])

  if (!list) return <Loading />

  return (
    <FlatList
      data={list?.results}
      renderItem={({ item }) => (
        <Box alignItems="center" mt="5" rounded="30" shadow="9">
          <ImageBackground source={{
            uri: `${item.backdrop_path ? IMG + item.backdrop_path : 'https://fakeimg.pl/300x200/CCC'}`
          }}
            alt={item.name || item.title} style={styles.backImg} resizeMode="cover">
            <Box position="absolute" bottom="0"
              background="muted.600:alpha.50" left="0" right="0"
              py="2" alignItems="center"
            >
              <Heading size="lg" color="muted.50"
                numberOfLines={1} ellipsizeMode="tail">
                {item.name || item.title}
              </Heading>
              <Heading size="xs" color="muted.50"
                numberOfLines={1} ellipsizeMode="tail">
                {item.original_name || item.original_title}
              </Heading>
            </Box>
          </ImageBackground>
        </Box>
      )}
      keyExtractor={item => item?.id.toString()}
      mb="20"
      showsVerticalScrollIndicator={false}
    />
  )
}