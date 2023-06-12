import { PATH } from "@Path"
import { TabActions, useNavigation } from "@react-navigation/native"

const useDirect = () => {
  const navigation = useNavigation()
  const jumpToAction = (path: string) => TabActions.jumpTo(path)

  return {
    goBack: () => navigation.goBack(),
    goHome: () => navigation.dispatch(jumpToAction(PATH.home)),
    goMember: () => navigation.dispatch(jumpToAction(PATH.member)),
    goSearch: () => navigation.dispatch(jumpToAction(PATH.search)),
  }
}

export default useDirect