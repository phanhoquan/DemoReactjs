const initialState=[
	{
		id: 1,
		image: "https://cdn.cellphones.com.vn/media/catalog/product/cache/7/image/9df78eab33525d08d6e5fb8d27136e95/i/p/iphone-7-plus-black_1_13.jpg",
		name: "Iphone 7 Plus",
		description: "Sản phẩm chính hãng",
		price: 500,
		inventory: 20,
		rating: 1,
	},
	{
		id: 2,
		image: "https://cdn.cellphones.com.vn/media/catalog/product/cache/7/image/9df78eab33525d08d6e5fb8d27136e95/i/p/iphone-7-plus-gold_3_3_1_1_1.jpg",
		name: "Iphone 6 Plus",
		description: "Sản phẩm chính hãng",
		price: 400,
		inventory: 20,
		rating: 2,
	},
	{
		id: 3,
		image: "https://cdn.cellphones.com.vn/media/catalog/product/cache/7/image/9df78eab33525d08d6e5fb8d27136e95/i/p/iphone-7-plus-gold_3_3_1_1_1.jpg",
		name: "Iphone 5 Plus",
		description: "Sản phẩm chính hãng",
		price: 300,
		inventory: 20,
		rating: 3,
	},
];

const products = (state= initialState, action) =>{
	switch (action.type) {
		default: return [...state];
	}
}

export default products;