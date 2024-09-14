const shopifyAPI = require('shopify-node-api');

const Shopify = new shopifyAPI({
    shop: 'your-shop-name.myshopify.com',
    shopify_api_key: 'your-api-key',
    access_token: 'your-access-token',
});

module.exports = Shopify;
