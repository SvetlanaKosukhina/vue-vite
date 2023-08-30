const { Products } = require('../../models');
const { RESPONSE_STATUSES } = require('../../constants');

module.exports = {
  async getAllOptions(req, res) {
    try {
      const allProducts = await Products.findAll();
      return res
        .status(RESPONSE_STATUSES.OK)
        .send(allProducts);
    } catch (error) {
      return res
        .status(RESPONSE_STATUSES.INTERNAL_SERVER_ERROR)
        .send(error.message);
    }
  },
};
