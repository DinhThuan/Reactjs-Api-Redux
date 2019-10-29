const initialState = [
   {
      id: 1,
      name: "I Phone 6 plus",
      price: 1000,
      status: true
   },
   {
      id: 2,
      name: "I Phone 6 plus",
      price: 400,
      status: true
   },
   {
      id: 3,
      name: "I Phone 6 plus",
      price: 400,
      status: true
   }
];

const products = (state = initialState, action) => {
   switch (action.type) {
      default:
         return [...state];
   }
};

export default products;
