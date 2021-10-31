import { Action } from "./components/action"
import Search from "./components/search"
import { UserInfo }  from './components/userinfo'

function App() {

  return (
    <div className='app'> 
      <Search />
      <UserInfo />
       <Action /> 
        <div className='repos'>
          <h2>Repositórios: </h2>
          <ul>
            <li>
              <a href='#'> Nome do Repositório</a>
            </li>
          </ul>
        </div>
        <div className='starred'>
          <h2>Favoritos: </h2>
          <ul>
            <li>
              <a href='#'> Nome do Repositório</a>
            </li>
          </ul>
        </div>
    </div>
  )
}


export default App