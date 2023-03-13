const formatUserCardRes = (userCard) => {
  return {
    id: userCard.id,
    email: userCard.email,
    type: userCard.type,
    first_name: userCard.first_name,
    last_name: userCard.last_name,
    created_at: userCard.created_at,
    expire_at: userCard.created_at,
    birth: userCard.birth,
    address: userCard.address,
  };
};

export default formatUserCardRes;
