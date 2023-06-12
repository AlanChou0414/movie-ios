import { AntDesign, Feather, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons'
import { Icon } from "native-base"

const useIcon = () => {
  const icon = (
    type: any,
    name: string,
    color?: string,
    size?: number,
    bg?: string,
    top?: number
  ) => (<Icon as={type} name={name} color={color} size={size} bg={bg} top={top} />)

  return {
    cancelIcon: (color: string) => icon(MaterialIcons, 'cancel', color, 5),
    searchIcon: (color?: string, size?: number) => icon(MaterialIcons, 'search', color, size),
    micIcon: () => icon(MaterialIcons, 'mic'),
    movieIcon: ({ color }: any) => icon(MaterialCommunityIcons, 'movie-open-settings-outline', color, 8),
    tvIcon: ({ color }: any) => icon(Feather, 'tv', color, 8),
    tabSearchIcon: ({ color }: any) => icon(Feather, 'search', color, 8),
    memberIcon: ({ color }: any) => icon(AntDesign, 'user', color, 8)
  }
}

export default useIcon