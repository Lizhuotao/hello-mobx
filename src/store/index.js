import { observable} from 'mobx'

class AppStore{
  @observable time = ''
  @observable todo = []
}

const store = new AppStore()

export default store