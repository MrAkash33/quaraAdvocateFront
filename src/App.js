import './App.css';
import Login from './pages/login';
import { BrowserRouter, RouterProvider } from 'react-router-dom'
import Routes from './router'
import { Provider } from 'react-redux'
import store from './store';
function App() {
  return (
    <BrowserRouter >
      <Provider store={store}>
        <Routes />
      </Provider>
    </BrowserRouter>
  );
}

export default App;
