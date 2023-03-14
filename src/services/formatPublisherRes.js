import formatManagerRes from "./formatManagerRes.js";

const formatPublisherRes = (publisher) => {
  return {
    id: publisher.id,
    name: publisher.name,
    address: publisher.address,
    created_at: publisher.created_at,
    updated_at: publisher.updated_at,
    created_by: formatManagerRes(publisher.created_by),
  };
};

export default formatPublisherRes;
