import formatAuthorRes from "./formatAuthorRes.js";
import formatPublisherRes from "./formatPublisherRes.js";
import formatManagerRes from "./formatManagerRes.js";
const formatBookRes = (book) => {
  console.log(book)
  return {
    id: book.id,
    name: book.name,
    type: book.type,
    created_at: book.created_at,
    updated_at: book.updated_at,
    release_date: book.release_date,
    status: book.status,
    code: book.code,
    publisher: formatPublisherRes(book.publisher_id),
    author: formatAuthorRes(book.author_id),
    created_by: formatManagerRes(book.created_by),
  };
};

export default formatBookRes;
