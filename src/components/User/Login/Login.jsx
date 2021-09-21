import React, { useState, useContext } from 'react'; //NÃO ESQUECER DE IMPORTAR O USESTATE AQUI
import { useHistory } from 'react-router-dom';
import StoreContext from 'components/Store/Context';
import UIButton from 'components/UI/Button/Button';
import { useAuth } from '../../../context/index';
import './Login.css';

function initialState() { //Aqui para o nosso useState nós temos que passar uma função que será o valor inicial
  return { user: '', password: '' }; //retornando um objeto que vai ter um user vazio e um password vazio também
}

function login({ user, password }) { //recebendo os valores do formulário
  if (user === 'admin' && password === 'admin') {
    return { token: '1234' };
  }
  return { error: 'Usuário ou senha inválido' }; // caso email e senha diferentes : usuário ou senha inválido
}

const UserLogin = () => {
  const [values, setValues] = useState(initialState); //definindo nosso State
  const [error, setError] = useState(null);
  const { setToken } = useContext(StoreContext);
  const { setUser } = useAuth();// função seta o nome do usuário
  const history = useHistory();

  function onChange(event) { //funcão que recebe um evento e não podemos esquecer de passar ela para nossos dois input 
    const { value, name } = event.target; // vamps extrair value e name de dentro o evento. target

    setValues({ //os dois inputs estão passando um name para eles(name user e name password) então no (event) a gente consegue acessar o name e o value
      ...values, //update dos valores no formulário
      [name]: value
    });
  }

  function onSubmit(event) { //função que recebe um evento
    event.preventDefault();

    const { token, error } = login(values); //vamos chamar o login aqui passando os valores do formulário

    if (token) { // se o token existir
      setToken(token); // vamos inserir ele na sessão do usuário e redirecionar ele para a pasta Home
      setUser(values.user); // pegando uma variável e retornando ela global para toda aplicação
      return history.push('/'); //mandando para origem ou seja, a home
    }
  //se ele não redirecionar 
    setError(error); //vamos retonar a função que retorna nosso valores iniciais
    setValues(initialState);
  }

  return (
    <div className="user-login">
      <h1 className="user-login__title"> Moodle Acadêmico UNIFAL-MG </h1>
      <form onSubmit={onSubmit}>
        <div className="user-login__form-control">
          <label htmlFor="user">User</label>
          <input
            id="user"
            type="text"
            name="user"
            onChange={onChange} //função que faz com que aconteça um evento sendo passada
            value={values.user} //passando o valor de user 
          />
        </div>
        <div className="user-login__form-control">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            onChange={onChange} //função que faz com que aconteça um evento sendo passada
            value={values.password} //passando o valor de password
          />
        </div>
        {error && (
          <div className="user-login__error">{error}</div>
        )}
        <UIButton
          type="submit"
          theme="contained-green"
          className="user-login__submit-button"
          rounded
        >
          Entrar
        </UIButton>
      </form>
    </div>
  );
};

export default UserLogin;
