const fetchProducts = async (keyword, page, pageSize) => {
  console.log('fetchProducts is called')
  const res = await fetch(
    `/api/products?keyword=${keyword}&page=${page}&limit=${pageSize}`
  );
  const data = await res.json();
  console.log(data)
  return data;
};

export default fetchProducts;
