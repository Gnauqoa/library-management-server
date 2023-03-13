const pageResponse = async (req, res, next) => {
  try {
    req.per_page =
      !Boolean(req.query.per_page) || req.query.per_page < 1
        ? 20
        : req.query.per_page;
    req.page =
      !Boolean(req.query.page) || req.query.page < 1 ? 1 : req.query.page;
    next();
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export default pageResponse;
