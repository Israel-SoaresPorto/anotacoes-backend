const repository = require("../repositories/categoryRepository");

exports.getAll = async () => {
  return await repository.getAll();
};

exports.getById = async (id) => {
  return await repository.getById(id);
};

exports.create = async (data) => {
  return await repository.create(data);
};

exports.update = async (id, data) => {
  return await repository.update(id, data);
};

exports.delete = async (id) => {
  return await repository.delete(id);
};
