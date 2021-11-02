import { useState } from "react"
import { AppContent } from './components/app-content'


function App() {
const [userinfo, setUserInfo] = useState({
  userinfo: {
    username: 'Fernando Daciuk',
    photo: 'https://avatars.githubusercontent.com/u/81476236?v=4',
    login: 'SallesCosta',
    repos: 12,
    followers: 10,
    following: 12,
  },
})
const [repos, setRepos] = useState([{
  name: 'Repo',
  link: '#',
}])
const [starred, setStarred] = useState([{
  name: 'Repo',
  link: '#',
}])
  return <AppContent 
    userinfo={userinfo}
    repos={repos}
    starred={starred}
  />
}


export default App