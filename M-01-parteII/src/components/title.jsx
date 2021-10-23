export const Title = ({name, lastName}) => {
  return (<h1>{name} {lastName}</h1>)
}

Title.defaultProps = {
  name: 'desconhecido',
  lastName: 'NoLastName'
}