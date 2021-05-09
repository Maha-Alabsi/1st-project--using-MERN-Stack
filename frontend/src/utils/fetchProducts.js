const fetchProducts = async (keyword, page, pageSize) => {
  const res = await fetch(
    `/api/products?keyword=${keyword}&page=${page}&limit=${pageSize}`
  );
  const data = await res.json();
  return data;
};

export default fetchProducts;

// http://localhost:5000