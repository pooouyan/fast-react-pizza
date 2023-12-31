import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './ui/Home';
import Menu, { loader as menuLoader } from './featchers/menu/Menu';
import Error from './ui/Error';
import Cart from './featchers/cart/Cart';
import CreateOrder, {
  action as createOrderAction,
} from './featchers/order/CreateOrder';
import Order, { loader as orderLoader } from './featchers/order/Order';
import { action as actionOrder } from './featchers/order/UpdateOrder';
import AppLayout from './ui/AppLayout';
const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/menu',
        element: <Menu />,
        errorElement: <Error />,
        loader: menuLoader,
      },
      {
        path: '/cart',
        element: <Cart />,
      },
      {
        path: '/order/new',
        element: <CreateOrder />,
        action: createOrderAction,
      },
      {
        path: '/order/:orderId',
        element: <Order />,
        loader: orderLoader,
        errorElement: <Error />,
        action: actionOrder,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
