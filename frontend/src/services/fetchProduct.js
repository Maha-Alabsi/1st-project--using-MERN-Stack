const fetchFunction = async (keyword, page, pageSize) => {
  const res = await fetch(
    `http://localhost:5000/api/products?keyword=${keyword}&page=${page}&limit=${pageSize}`
  );
  const data = await res.json();
  return data;
};

export default fetchFunction;
