import HelloWorld from './HelloWorld.vue';

export default {
  title: 'Dem2o/HelloWorld',
  component: HelloWorld,
  argTypes: {
  },
};

const Template = () => ({
  components: { HelloWorld },
  template: '<HelloWorld />',
});

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'Button',
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Button',
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  label: 'Button',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'Button',
};
