import { Repos } from './repos'
import { Search } from "./search"
import { UserInfo } from './userinfo'
import { Action } from "./action"

export const AppContent = ({ UserInfo, repos, starred }) => (
    <div className='app'>
        <Search />
        {!!UserInfo && <UserInfo />}
        {!!UserInfo && <Action />}
        {!!repos.length && <Repos
            titulo='Repositórios'
            className='repos'
            repos={[{
                name: 'nome do repositório',
                link: '#',
            }]}
        />
        }
        {!!repos.length && <Repos
            titulo='Favoritos'
            className='starred'
            repos={[{
                name: 'nome do repositório',
                link: '#'
            }]}
        />
        }
    </div>
)