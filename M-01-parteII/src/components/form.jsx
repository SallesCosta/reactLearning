import { Component } from "react"

export class Formulario extends Component {
  constructor() {
    super()
    this.state = {
      value: 'Valor inicial',
      checked: false
    }
  }
  render() {
    return (
      <div>
        <form>
          <input type='text' value={this.state.value} onChange={(e) => {
            this.setState({
              value: e.target.value
            })
          }} />
          <label>
            <input
              type='checkbox'
              checked={this.state.checked}
              value='my-checkbox'
              onChange={(e) => this.setState({ checked: !this.state.checked})}
            />
            Checkbox
          </label>
        </form>
      </div>
    )
  }
}