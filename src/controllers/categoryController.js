const services = require("../services/categoryServices");

exports.getAll = async (req, res) => {
  try {
    const categories = await services.getAll();

    if (!categories) {
      return res
        .status(404)
        .json({ message: "Nenhuma categoria foi encontrada" });
    }

    res.status(200).json(categories);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

exports.getById = async (req, res) => {
  try {
    const id = req.params.id;

    const category = await services.getById(id);

    if (!category) {
      return res.status(404).json({ message: "Categoria não encontrada" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

exports.create = async (req, res) => {
  try {
    const data = req.body;

    const category = await services.create(data);

    res.status(201).json({ message: "Categoria criada com sucesso" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

exports.update = async (req, res) => {
  try {
    const id = req.params.id;
    const data = req.body;

    const category = await services.update(id, data);

    res.status(200).json({ message: "Categoria atualizada com sucesso" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

exports.delete = async (req, res) => {
  try {
    const id = req.params.id;

    const category = await services.delete(id);

    res.status(200).json({ message: "Categoria deletada com sucesso" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};
