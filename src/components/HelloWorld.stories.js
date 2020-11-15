import HelloWorld from './HelloWorld.vue';

export default {
  title: 'TMC/HelloWorld',
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
