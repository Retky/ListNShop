const getAllShops = (req, res) => {
  res.send(`Get all shops for user ${req.params.userId}`);
};

const getShopById = (req, res) => {
  res.send(`Get shop ${req.params.shopId} for user ${req.params.userId}`);
};

const createShop = (req, res) => {
  console.log(req.body);
  res.send(`Create new shop for user ${req.params.userId}`);
};

const updateShop = (req, res) => {
  console.log(req.body);
  res.send(`Update shop ${req.params.shopId} for user ${req.params.userId}`);
};

const deleteShop = (req, res) => {
  res.send(`Delete shop ${req.params.shopId} for user ${req.params.userId}`);
};

module.exports = {
  getAllShops,
  getShopById,
  createShop,
  updateShop,
  deleteShop,
};
