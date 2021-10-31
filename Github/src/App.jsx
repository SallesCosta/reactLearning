
function App() {

  return (
    <div className='app'>
      <div className='userInfo'>
        <img src='https://avatars.githubusercontent.com/u/81476236?v=4' />
        <h2>
          <a target='_blank' href='https://github.com/SallesCosta'>Eduardo</a>
        </h2>
        <ul className='reposInfo'>
          <li>- Repositórios: 100</li>
          <li>- Seguidores: 10</li>
          <li>- Seguindo: 10</li>
        </ul>

        <div className='acitons'>
          <button>Ver repositórios</button>
          <button>Ver Favoritos </button>
        </div>
        <ul className='repos'>
          <li><a href='#'> Nome do Repositório</a></li>
        </ul>
        <ul className='starred'>
          <li><a href='#'> Nome do Repositório</a></li>
        </ul>
      </div>
    </div>
  )
}

export default App
