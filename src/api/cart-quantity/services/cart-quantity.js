'use strict';

/**
 * cart-quantity service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::cart-quantity.cart-quantity');
