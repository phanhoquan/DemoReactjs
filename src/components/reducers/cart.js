import * as Types from '../constants/ActionType'
var data = JSON.parse(localStorage.getItem('CART'));

const initialState= data ? data : [];

const cart = (state= initialState, action) =>{
	var { product, quantity } = action;
	var index = -1;
	switch (action.type) {
		case Types.ADD_TO_CART:
			index = findProductIDCart (state, product);
			// nếu index khác -1 thì setState lại cái index.quantity cộng thêm 1 ngược lại thêm mới
			if(index !== -1){
				state[index].quantity += quantity;
			}else{
				state.push({
					product,
					quantity
				})
			}
			localStorage.setItem('CART', JSON.stringify(state));//chuyen thanh chuoi string
			return [...state];
		case Types.DELETE_PRODUCT_IN_CART:
				//1 truyen vao 1 product có index và id product
			index = findProductIDCart(state, product);
			if(index !== -1){
				state.splice(index, 1); // xoa vi tri index va 1 phan tu
			}
			localStorage.setItem('CART', JSON.stringify(state));//chuyen thanh chuoi string
			return [...state];
		case Types.UPDATE_PRODUCT_IN_CART:
			// kiem tra cai index va cap nhat cai quantity sau do set lai localstorage
			index = findProductIDCart(state, product);
			if(index !== -1){
				state[index].quantity = quantity
			}
			localStorage.setItem('CART', JSON.stringify(state));//chuyen thanh chuoi string
			return [...state];
		default: return [...state];
	}
}

var findProductIDCart = (cart, product) =>{
	var index = -1; //khong tim thay
	if(cart.length>0){
		for (var i = 0; i < cart.length; i++) {
			//nếu cart product vị trí i bằng  product id mới thì gán index = i
			if(cart[i].product.id === product.id){
				index = i;
				break;
			}
		}
	}
	return index;
}

export default cart;