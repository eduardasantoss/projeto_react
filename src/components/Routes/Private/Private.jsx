import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import StoreContext from 'components/Store/Context';

const RoutesPrivate = ({ component: Component, ...rest}) => {
  const { token } = useContext(StoreContext);

  return ( //retorna a nossa rota e para isso passamos um render para ela 
    <Route
      {...rest}
      render={() => token //se tiver o token renderizo o componente
        ? <Component {...rest} /> //a gente retorna o componente a ser renderizado ou caso:
        : <Redirect to="/login" /> //caso o usuário não tiver logado na nossa aplicação > recireciono ele para a página de login
      }
    />

    //em resumo: na nossa rota privada a gente extrai o token e partir disso a gente sabe se o usuário está logado ou não.
  )
}

export default RoutesPrivate;
