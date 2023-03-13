import formatAuthorRes from "./formatAuthorRes.js";
import formatPublisherRes from "./formatPublisherRes.js";

const formatBookRes = (book) => {
  return {
    id: book.id,
    name: book.name,
    type: book.type,
    created_at: book.created_at,
    updated_at: book.updated_at,
    release_date: book.release_date,
    publisher: formatPublisherRes(book.publisher_id),
    author: formatAuthorRes(book.author_id),
  };
};

export default formatBookRes;
