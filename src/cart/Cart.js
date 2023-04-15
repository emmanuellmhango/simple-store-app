import { useSelector } from 'react-redux';
import './cart.css';

function Cart() {
  const cart = useSelector((state) => state.cart);

  return (
    <div>
      <br />
      {' '}
      <br />
      <br />
      {' '}
      <br />
      <h2 className="pad">My Basket</h2>
      <table className="cart-container">
        <tr className="cart header-t">
          <td>Product</td>
          <td>Price</td>
          <td>Quantity</td>
        </tr>
        {cart.map((item) => (
          <tr key={item.id} className="cart">
            <td>
              {' '}
              {item.title}
              {' '}
            </td>
            <td>
              {' '}
              {item.price}
              {' '}
            </td>
            <td>
              {' '}
              {item.quantity}
              {' '}
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
}

export default Cart;
