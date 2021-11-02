export const UserInfo = ({ userinfo }) => (
  <div className='user-info'>
    <img src={userinfo.photo} />

    <h1>
      <a href={`https://github.com/${userinfo.login}`}>
        {userinfo.username}
      </a>
    </h1>

    <ul className='repos-info'>
      <li>Repositórios: {userinfo.repos}</li>
      <li>Seguidores: {userinfo.followers}</li>
      <li>Seguindo: {userinfo.following}</li>
    </ul>
  </div>
)
