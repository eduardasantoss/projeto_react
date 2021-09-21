import { createContext } from 'react';

const StoreContext = createContext({
  token: null, //valor que eu quero armazenar é um token e eles inciam com null
  setToken: () => {},
});

export default StoreContext;
