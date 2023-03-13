const addBook = async (req, res) => {
  try {
    const { name, type, release_date, publisher_id, author_id } = req.body;
    
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export default addBook;
