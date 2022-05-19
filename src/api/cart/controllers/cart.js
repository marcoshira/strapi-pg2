const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::cart.cart', ({ strapi }) =>  ({

  async create(ctx) {
    const user = ctx.state.user.id;
    ctx.request.body.data.user = user;
    const {data, meta} = await super.create(ctx);

    return {data, meta};

  },

  async update(ctx) {
    const { id } = ctx.params;

    const cart = await strapi.db.query('api::cart.cart').findOne({
      where: {
        id: id,
        user: {
          id:{
            $eq: ctx.state.user.id
          }
        }
      },
      populate: {
        products: true,
        user: true,
      }
    });
    if (!cart || !cart.user) {
      return ctx.unauthorized('You cannot update.')
    }
    const response = await super.update(ctx);

    const cartUpdated = await strapi.db.query('api::cart.cart').findOne({
      where: {
        id: id,
        user: {
          id:{
            $eq: ctx.state.user.id
          }
        }
      },
      populate: {
        products: true,
        user: true,
      }
    });

    return cartUpdated;
  },

  async find(ctx) {
  const content = await strapi.db.query('api::cart.cart').findMany({
    where: {
      user: {
        id:{
          $eq: ctx.state.user.id
        }
      }
    },
    populate: {
      products: true,
      user: true,
    }
  });
  return content;
  },

  async findOne(ctx) {

  const { id } = ctx.params;

  const content = await strapi.db.query('api::cart.cart').findOne({
    where: {
      id: id,
      user: {
        id:{
          $eq: ctx.state.user.id
        }
      }
    },
    populate: {
      products: true,
      user: true,
    }
  });
  return content;
  }
}));
