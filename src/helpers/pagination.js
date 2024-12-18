const pagination = (page, limit) => {
  const page = parseInt(page);
  const limit = parseInt(limit);

  const skip = (page - 1) * limit;

  return { skip, take: limit };
};

module.exports = pagination;
