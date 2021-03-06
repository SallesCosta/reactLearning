import { useState } from 'react'
import './App.css'
import { Title } from './components/title'
import React, { Component } from 'react'
import { Button, LikeButton, SearchButton, Square } from './button'
import Timer from './components/timer'
import { Formulario } from './components/form'


// Aula 40
class App extends Component {
  constructor() {
    super()
    this.state = {
      checked: false,
      showContent: false,
    }
  }
  render() {
    return (
      <div>
        <Formulario />
        {/* <Button handleClick={() => {console.log('clicou')}}>Clique</Button> */}
        <label>
          <input
            type='checkbox'
            checked={this.state.checked}
            onChange={() =>{
              this.setState({ checked: !this.state.checked
              },() => {
                this.setState({
                  showContent: this.state.checked
                })
              })
          }} />
           mostrar conteudo
        </label>
        {this.state.showContent && <p>olha eu aqui </p>}
      </div>
    )
  }

}

// aula 32
// class App extends Component {
//   constructor() {
//     console.log('constructor')
//     super()
//     this.state = {
//       color: 'grey',
//       showTimer: false,
//       time: 0,
//     }
//   }

//   componentWillMount() {
//     console.log('componentWillMount do app')
//   }

//   componentDidMount() {
//     console.log('componentDidMount do app')
//   }



//   render() {
//     console.log('render')
//     return (
//       <div>
//         <Square color={this.state.color} />
//         {['red', 'green', 'blue'].map((color) => (
//           <Button key={color} handleClick={() => this.setState({ color })}>{color}</Button>
//         ))}
//         <Timer time={this.state.time} />
//         <Button handleClick={() => this.setState({ time: this.state.time + 10  })}
//         >
//           ChangeProps
//         </Button>
//       </div>
//     )
//   }
// }
// class App extends Component {
//   constructor() {
//     super()
//     this.state = {
//        text: 'inicial'
//     }
//   }
//   render() {
//     return (
//       <div className='container' onClick={ () => this.setState({text: 'outro texto'})}>
//         {this.state.text}
//       </div>
//     )
//   }
// }

// Aula 29
// class App extends Component {
//   render() {
//     return (
//       <div className='container'>
//         <Title name='Eduardo' />
//         <Button><b>T</b>e<b>X</b>t<b>A</b>o</Button> {/* dessa forma (com children), da pra colocar mais elementos dentro do bot??o. */}
//         <LikeButton />
//         <SearchButton />
//       </div>
//     )
//   }
// }

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
