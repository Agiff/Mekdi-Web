const { Item, Ingredient, Category, User, sequelize } = require('../models');

class itemController {
  static async showItems(req, res, next) {
    try {
      const items = await Item.findAll({
        include: [Category, User]
      });
      res.status(200).json(items);
    } catch (error) {
      next(error);
    }
  }

  static async getUserItems(req, res, next) {
    try {
      const items = await Item.findAll({
        include: [Category, Ingredient]
      });
      res.status(200).json(items);
    } catch (error) {
      next(error);
    }
  }

  static async showItemDetail(req, res, next) {
    try {
      const { id } = req.params;
      const item = await Item.findByPk(id, {
        include: [Category, Ingredient]
      });
      if (!item) throw { name: 'NotFound' };
      res.status(200).json(item);
    } catch (error) {
      next(error);
    }
  }

  static async getUserItemDetail(req, res, next) {
    try {
      const { id } = req.params;
      const item = await Item.findByPk(id, {
        include: [Category, Ingredient]
      });
      if (!item) throw { name: 'NotFound' };
      res.status(200).json(item);
    } catch (error) {
      next(error);
    }
  }

  static async createItem(req, res, next) {
    const t = await sequelize.transaction();
    try {
      const { id } = req.user;
      const { name, description, price, imgUrl, categoryId, ingredients } = req.body;
      const createdItem = await Item.create(
        { name, description, price, imgUrl, categoryId, authorId: id },
        { transaction: t });
      for (const ingredient of ingredients) {
        if (ingredient === '') continue;
        await Ingredient.create({ itemId: createdItem.id, name: ingredient },
          { transaction: t });
      }
      res.status(201).json({ message: 'Item created' });
      await t.commit();
    } catch (error) {
      await t.rollback();
      next(error);
    }
  }

  static async updateItem(req, res, next) {
    try {
      const { id } = req.params;
      const { name, description, price, imgUrl, categoryId } = req.body;
      const item = await Item.findByPk(id);
      if (!item) throw { name: 'NotFound' };
      const updatedItem = await item.update({ name, description, price, imgUrl, categoryId });
      res.status(200).json(updatedItem);
    } catch (error) {
      next(error);
    }
  }

  static async deleteItem(req, res, next) {
    try {
      const { id } = req.params;
      const item = await Item.findByPk(id);
      if (!item) throw { name: 'Not Found' };
      await item.destroy();
      res.status(200).json({ message: 'Item deleted' })
    } catch (error) {
      next(error);
    }
  }
}

module.exports = itemController;