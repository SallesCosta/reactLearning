import { Search } from './search'
import { UserInfo } from './userinfo'
import { Actions } from './actions'
import { Repos } from './repos'

export const AppContent = ({
    userinfo,
    repos,
    starred,
    isFetching,
    handleSearch,
    getRepos,
    getStarred
}) => (
    <div className='app'>
        <Search isDisabled={isFetching} handleSearch={handleSearch} />
        {isFetching && <div>Carregando...</div>}
        {!!userinfo && <UserInfo userinfo={userinfo} />}
        {!!userinfo && <Actions getRepos={getRepos} getStarred={getStarred} />}

        {!!repos.length &&
            <Repos
                className='repos'
                title='Repositórios:'
                repos={repos}
            />
        }

        {!!starred.length &&
            <Repos
                className='starred'
                title='Favoritos:'
                repos={starred}
            />
        }
    </div>
)
