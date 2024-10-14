import { RouterProvider } from 'react-router-dom';
import 'normalize.css';
import './styles/border.css';
import './styles/base.css';
import { router } from './router'


export default function App() {
  return <RouterProvider router={router} />
}
