import {Box} from './Box'

export default{
  title: 'minha Box',
  component: Box,
}

const Template = (args) => <Box {...args} />

export const Primary = Template.bind({})

Primary.args = {
  primary: true,
  label: 'botao Primary',
};

Secondary.args = {
  primary: false,
  label: 'botao secondary',
}
