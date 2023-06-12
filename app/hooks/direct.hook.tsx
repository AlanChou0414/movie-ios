import { PATH } from "@Path"
import { TabActions, useNavigation } from "@react-navigation/native"

const useDirect = () => {
  const navigation = useNavigation()
  const jumpToAction = (path: string) => TabActions.jumpTo(path)

  return {
    goBack: () => navigation.goBack(),
    goMovie: () => navigation.dispatch(jumpToAction(PATH.movies)),
    goTv: () => navigation.dispatch(jumpToAction(PATH.tv)),
    goMember: () => navigation.dispatch(jumpToAction(PATH.member)),
    goSearch: () => navigation.dispatch(jumpToAction(PATH.search)),

  }
}

export default useDirect