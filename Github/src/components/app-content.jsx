import { Repos } from './repos'
import { Search } from "./search"
import { UserInfo } from './userinfo'
import { Action } from "./action"
import React from 'react'

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
        {!!starred.length && <Repos
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

AppContent.propTypes = {
    UserInfo: React.PropTypes.object.isRequired,
    repos: React.PropTypes.array.isRequired,
    starred: React.PropTypes.array.isRequired,
}