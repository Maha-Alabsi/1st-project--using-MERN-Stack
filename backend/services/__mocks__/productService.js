const productsService = async () => {
  try {
   return Promise.resolve({
    totalpages: totalpages,
    products: products,
    totalitems: totalitems,
  })
  } catch (error) {
    console.log(`Error: ${error.message}`.red.underline.bold);
  }
};

export default productsService;
