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
      <Repos
        titulo='Repositórios'
        className='repos'
        repos={[{
          name: 'nome do repositório',
          link: '#',
        }]}
      />
      <Repos
        titulo='Favoritos'
        className='starred'
        repos={[{
          name: 'nome do repositório',
          link: '#'
        }]}
      />
    </div>
  )
}


export default App