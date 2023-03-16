const { Item } = require('../models');

class itemController {
  static async showItems(req, res, next) {
    try {
      const items = await Item.findAll();
      res.status(200).json(items);
    } catch (error) {
      next(error);
    }
  }

  static async showItemDetail(req, res, next) {
    try {
      const { id } = req.params;
      const item = await Item.findByPk(id);
      if (!item) throw { name: 'NotFound' };
      res.status(200).json(item);
    } catch (error) {
      next(error);
    }
  }

  static async createItem(req, res, next) {
    try {
      const { id } = req.user;
      const { name, description, price, imgUrl, categoryId } = req.body;
      const createdItem = await Item.create({ name, description, price, imgUrl, categoryId, authorId: id });
      res.status(201).json(createdItem);
      //TODO ADD TRANSACTION
    } catch (error) {
      next(error);
    }
  }
}

module.exports = itemController;