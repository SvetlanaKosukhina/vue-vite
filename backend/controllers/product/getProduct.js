const { Products } = require('../../models');
const { RESPONSE_STATUSES } = require('../../constants');

module.exports = {
  async getProduct(req, res) {
    try {
      const { params: { id } } = req;

      if (!id) {
        return res
          .status(RESPONSE_STATUSES.BAD_REQUEST)
          .send(ERROR_MESSAGE.INVALID_ID);
      }

      const foundProduct = await Products.findOne({ where: { id } });

      if (!foundProduct) {
        return res
          .status(RESPONSE_STATUSES.BAD_REQUEST)
          .send(ERROR_MESSAGE.USER_NOT_FOUND);
      }

      return res
        .status(RESPONSE_STATUSES.OK)
        .send(foundProduct);
    } catch (error) {
      return res
        .status(RESPONSE_STATUSES.INTERNAL_SERVER_ERROR)
        .send(error.message);
    }
  },
};
