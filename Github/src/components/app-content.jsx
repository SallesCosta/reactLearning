import { Repos } from './repos'
import { Search } from "./search"
import { UserInfo } from './userinfo'
import { Action } from "./action"
import React, { useState } from 'react'

export const AppContent = ({ userinfo, repos, starred }) => (
    <div className='app'>
        <Search />
        {!!userinfo && <UserInfo userinfo={userinfo} />}
        {!!userinfo && <Action />}
        {!!repos.length && <Repos
            titulo='Repositórios'
            className='repos'
            repos={repos}
        />
        }
        {!!starred.length && <Repos
            titulo='Favoritos'
            className='starred'
            repos={starred}
        />
        }
    </div>
)

// AppContent.propTypes = {
//     UserInfo: React.PropTypes.object.isRequired,
//     repos: React.PropTypes.array.isRequired,
//     starred: React.PropTypes.array.isRequired,
// }