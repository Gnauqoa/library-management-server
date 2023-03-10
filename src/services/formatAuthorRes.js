import formatManagerRes from "./formatManagerRes.js";

const formatAuthorRes = (userCard) => {
  return {
    id: userCard.id,
    first_name: userCard.first_name,
    last_name: userCard.last_name,
    created_at: userCard.created_at,
    updated_at: userCard.updated_at,
    birth: userCard.birth,
    sex: userCard.sex,
    created_by: formatManagerRes(userCard.created_by),
  };
};

export default formatAuthorRes;
