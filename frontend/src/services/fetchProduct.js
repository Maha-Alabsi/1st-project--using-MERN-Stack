const fetchProduct = async ({props}) => {
    try {
        const res = await fetch(`/api/products/${props}`);
        const data = await res.json();
      return data;
    } catch (error) {
      if (error.cod !== 200) {
        console.log('Error in Fetching', error);
      }
    }
  };
  export default fetchProduct;

