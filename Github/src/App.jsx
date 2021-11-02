import { useState } from "react"
import { AppContent } from './components/app-content'


function App() {
const [userInfo, setUserInfo] = useState({
  userinfor: {
    username: 'Fernando Daciuk',
    repos: 12,
    followers: 10,
    following: 12,
  },
})
const [repos, setRepos] = useState([])
const [starred, setStarred] = useState([])
  return <AppContent 
    userInfo={userInfo}
    repos={repos}
    starred={starred}
  />
}


export default App