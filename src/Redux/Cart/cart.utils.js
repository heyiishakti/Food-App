import { cartAddItem } from "./cart.action";



export const addItemToCart = (cartItems, cartAddItem) => {                  //Adding Items into Cart
    const existingCartItem = cartItems.find                                //Finding if the Item we are adding is already in the Cart or Not
        (cartAddItem => cartItems.id === cartAddItem.id
    );
    
    if (existingCartItem) {                                                // And if we find that the same Item is already exist in the cart 
        return cartItems.map(cartItem =>                                        // Then we gonna increase the quantity of that item by one
            cartItem.id === cartAddItem.id ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem)
    }

    return [...cartItems, { ...cartAddItem, quantity: 1 }];                // Otherwise we gonna add that item by it's own id

}


export const removeItemFromCart = (cartItems, CartRemoveItem) => {            // Removing Items From Cart
    const existingCartItem = cartItems.find                               
        (cartAddItem => cartItems.id === cartAddItem.id
    );

    if (existingCartItem.quantity === 1) {
        return cartItems.filter((cartItem)=> cartItem.id !== cartAddItem.id)
    }

    return cartItems.map((cartItem) =>
        cartItem.id === cartAddItem.id ? {...cartItem, quantity: cartItem.quantity - 1} : cartItem
    )
}           
