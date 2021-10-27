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
            <input //controled
              type='checkbox'
              checked={this.state.checked}
              value='my-checkbox'
              onChange={(e) => this.setState({ checked: !this.state.checked })}
            />
            Checkbox controlado
          </label>
          <label>
            <input //controled
              type='checkbox'
              defaultChecked={false}
            />
            Checkbox Não controlado
          </label>
          <input type='radio' name='rd' value='1' defaultChecked/> Radio 1
          <input type='radio' name='rd' value='2' /> Radio 2
          <select>
            <option value='1'>op 1</option>
            <option value='2' selected>op 2</option>
            <option value='3'>op 3 </option>
          </select>
        </form>
      </div>
    )
  }
}