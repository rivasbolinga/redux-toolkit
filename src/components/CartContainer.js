import CartItem from "./CartItem";
import { useDispatch, useSelector } from 'react-redux'
import { clearCart } from "../features/cart/cartSlice";
// useSelecter to access the entire store.
const CartContainer = () => {
  const dispatch = useDispatch();
  const { cartItems, total, amount } = useSelector((state)=>  state.cart) 
  // -- If statement. in case of 0 just retun ean mpty basket. 
  if (amount < 1) {
    return (
      <section className="cart">
        <header>
          <h2>your bag</h2>
          <h4 className="empty-cart">is currently empty</h4>
        </header>
      </section>
    )
  }
  // in case of 1 or more, return all the items selected.
  //With map we iterate over cartItems and ineach item, we return <CartItem> with an id. and we pass all the properties of the with ...item
  return(
    <section className="cart">
      <header>
        <h2>Your bag</h2>
      </header>
      <div>
        {cartItems.map((item)=>{
        return <CartItem key={item.id} {...item} />
        })}
      </div>
      <footer>
        <hr />
      <div className="cart-total">
        <h4>
          total <span>${total}</span>
        </h4>
      </div>
      <button className="btn clear-btn" onClick={()=>dispatch(clearCart())}>clear cart</button>
      </footer>
      </section>
  )
}

export default CartContainer;