import Greeting from './Greeting';
import ShoppingList from './ShoppingList';
import OrderStatus from './OrderStatus';

function App() {
  const products = ['Сок', 'Бананы', 'Хлеб', 'Огурцы', 'Груши'];
  const orders = [
    { orderId: 123, status: 'в пути' },
    { orderId: 456, status: 'доставлено' }
  ];

  return (
    <div className="App">
      <Greeting name="Alice" />
      <ShoppingList items={products} />
      {orders.map(order => (
        <OrderStatus key={order.orderId} orderId={order.orderId} status={order.status} />
      ))}
    </div>
  );
}

export default App;
