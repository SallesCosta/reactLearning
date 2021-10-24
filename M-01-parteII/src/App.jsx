import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { Title } from './components/title'
import React, { Component } from 'react'

class App extends Component {
  render() {
    return (
      <div className='container' onClick={(e) => {alert('clicou')}}>
        <Title name='Eduardo'/>
      </div>
    )
  }
}

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>Hello Vite +. React!</p>
//         <p>
//           <button type="button" onClick={() => setCount((count) => count + 2)}>
//             count is: {count}
//           </button>
//         </p>
//         <Title name='Eduardo' />
//         <p>
//           <a
//             className="App-link"
//             href="https://reactjs.org"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Learn React
//           </a>
//           {' | '}
//           <a
//             className="App-link"
//             href="https://vitejs.dev/guide/features.html"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Vite Docs
//           </a>
//         </p>
//       </header>
//     </div>
//   )
// }

export default App
