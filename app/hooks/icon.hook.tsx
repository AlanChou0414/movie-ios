import { AntDesign, Feather, MaterialIcons } from '@expo/vector-icons'
import { Icon } from "native-base"

const useIcon = () => {
  const icon = (
    type: any,
    name: string,
    color?: string,
    size?: number,
    bg?: string
  ) => (<Icon as={type} name={name} color={color} size={size} bg={bg} />)

  return {
    cancelIcon: (color: string) => icon(MaterialIcons, 'cancel', color, 5),
    searchIcon: (color?: string, size?: number) => icon(MaterialIcons, 'search', color, size),
    micIcon: () => icon(MaterialIcons, 'mic'),
    homeIcon: ({ color }: any) => icon(AntDesign, 'home', color, 8),
    tabSearchIcon: ({ color }: any) => icon(Feather, 'search', color, 8),
    memberIcon: ({ color }: any) => icon(AntDesign, 'user', color, 8)
  }
}

export default useIcon