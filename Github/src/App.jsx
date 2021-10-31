
function App() {

  return (
    <div className='app'>
      <div className='userInfo'>
        <img src='https://avatars.githubusercontent.com/u/81476236?v=4' />
        <h1>
          <a target='_blank' href='https://github.com/SallesCosta'>Eduardo</a>
        </h1>
        <ul className='reposInfo'>
          <li>Repositórios: 100</li>
          <li>Seguidores: 10</li>
          <li>Seguindo: 10</li>
        </ul>

        <div className='acitons'>
          <button>Ver repositórios</button>
          <button>Ver Favoritos </button>
        </div>
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
    </div>
  )
}

export default App
