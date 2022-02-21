import PropTypes from 'prop-types'
import './box.css'

export const Box = ({ primary, onClick, label, ...props }) => {
  const mode = primary ? 'verde' : 'azul'
  return (
    <div className={mode} onClick={() => console.log('clicou')}>
      {label}
    </div>
  )
}

Box.propTypes = {
  primary: PropTypes.bool,
  label: PropTypes.string,
  onClick: PropTypes.func,
}

Box.defaultProps = {
  primary: true,
  label: 'meu botão',
  onClick: undefined,
}
