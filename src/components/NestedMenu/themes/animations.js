export default {
  toggle: ({node: {toggled}}) => ({
    animation: {rotateZ: toggled ? 90 : 0},
    duration: 10
  }),
  drawer: (/* props */) => ({
    enter: {
      animation: 'slideDown',
      duration: 10
    },
    leave: {
      animation: 'slideUp',
      duration: 10
    }
  })
};
