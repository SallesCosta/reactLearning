
export const UserInfo = ({ userinfo }) => (
    <div className='user-info'>
        <img src={userinfo.photo} />
        <h1>
            <a target='_blank' href={`https://github.com/${userinfo.login}`}>Eduardo</a>
        </h1>
        <ul className='repos-info'>
            <li>Repositórios: 100</li>
            <li>Seguidores: 10</li>
            <li>Seguindo: 10</li>
        </ul>
    </div>
)