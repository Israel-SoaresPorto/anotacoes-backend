const prisma = require("../loaders/prisma");
const pagination = require("../helpers/pagination");

class NotesRepository {
  async create(data) {
    return prisma.note.create({ data });
  }

  async findAll(page = 1, limit = 12, search) {
    const { skip, take } = pagination(page, limit);

    return prisma.note.findMany({
      where: {
        title: {
          contains: search,
          mode: "insensitive",
        },
      },
      skip,
      take,
    });
  }

  async findById(id) {
    return prisma.note.findUnique({ where: { id } });
  }

  async findByCategory(categoryId, page = 1, limit = 12, search) {
    const { skip, take } = pagination(page, limit);

    return prisma.note.findMany({
      where: {
        categoryId,
        title: {
          contains: search,
          mode: "insensitive",
        },
      },
      skip,
      take,
    });
  }

  async update(id, data) {
    return prisma.note.update({ where: { id }, data });
  }

  async delete(id) {
    return prisma.note.delete({ where: { id } });
  }
}

module.exports = NotesRepository();
