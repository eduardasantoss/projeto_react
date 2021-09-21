
import React from 'react';
import Context from './Context';
import useStorage from 'utils/useStorage';

const StoreProvider = ({ children }) => {
  const [token, setToken] = useStorage('token'); 

  return ( 
    <Context.Provider
      value={{ //temos que passar token e setToken
        token,
        setToken,
      }}
    >
      {children} 
    </Context.Provider>
  )
}


export default StoreProvider;
