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
    homeIcon: () => icon(AntDesign, 'home', '#fff', 8),
    tabSearchIcon: () => icon(Feather, 'search', '#fff', 8),
    memberIcon: () => icon(AntDesign, 'user', '#fff', 8)
  }
}

export default useIcon