const formatManagerRes = (manager) => {
  return {
    id: manager.id,
    first_name: manager.first_name,
    last_name: manager.last_name,
    email: manager.email,
    created_at: manager.created_at,
    updated_at: manager.updated_at,
  };
};

export default formatManagerRes;
