module.exports = {
  routes: [
    {
      method: 'POST',
      path: '/cart',
      handler: 'cart.create',
      config: {
        policies: ['global::is-loggedin']
      }
    },
    {
      method: 'GET',
      path: '/carts',
      handler: 'cart.find',
      config: {
        policies: ['global::is-loggedin']
      }
    },
    {
      method: 'GET',
      path: '/cart/:id',
      handler: 'cart.findOne',
      config: {
        policies: ['global::is-loggedin']
      }
    },
    {
      method: 'PUT',
      path: '/carts/:id',
      handler: 'cart.update',
      config: {
        policies: ['global::is-loggedin']
      }
    }
  ]
}
