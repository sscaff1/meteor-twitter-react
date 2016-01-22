FlowRouter.route('/', {
  name: 'home',
  action() {
    ReactLayout.render(App, {yield: <Home />})
  }
})
