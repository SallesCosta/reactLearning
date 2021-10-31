import { Action } from "./components/action"
import { Repos } from "./components/repos"
import { Search } from "./components/search"
import { UserInfo } from './components/userinfo'

function App() {

  return (
    <div className='app'>
      <Search />
      <UserInfo />
      <Action />
      <Repos titulo='Repositórios' link='#' className='repos' />
      <Repos titulo='Favoritos' link='#' className='starred' />
    </div>
  )
}


export default App