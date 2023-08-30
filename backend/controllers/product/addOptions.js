const { Products } = require('../../models');
const { RESPONSE_STATUSES } = require('../../constants');

module.exports = {
  async addOptions(req, res) {
    try {
      const {
        body: {
          size,
          count,
        },
      } = req;

      const payload = {
        size: size.trim(),
        count: count.trim(),
      };

      const hasMissData = payload.size === '' || payload.count === ''

      if (hasMissData) {
        return res
          .status(RESPONSE_STATUSES.BAD_REQUEST)
          .send(ERROR_MESSAGE.MISSED_DATA);
      }

      const newProduct = await Products.create(payload);

      return res
        .status(RESPONSE_STATUSES.CREATED)
        .send(newProduct);
    } catch (error) {
      return res
        .status(RESPONSE_STATUSES.INTERNAL_SERVER_ERROR)
        .send(error.message);
    }
  },
};
