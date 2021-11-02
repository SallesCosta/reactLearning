import { useState } from "react"
import { AppContent } from './components/app-content'


function App() {
const [userInfo, setUserInfo] = useState(null)
const [repos, setRepos] = useState([])
const [starred, setStarred] = useState([])
  return <AppContent 
    userInfo={userInfo}
    repos={repos}
    starred={starred}
  />
}


export default App