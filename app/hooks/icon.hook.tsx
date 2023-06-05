import { MaterialIcons } from '@expo/vector-icons'
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
    searchIcon: () => icon(MaterialIcons, 'search'),
    micIcon: () => icon(MaterialIcons, 'mic')
  }
}

export default useIcon