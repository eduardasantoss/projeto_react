import React, { useContext, useEffect, useState } from 'react';
import StoreContext from 'components/Store/Context';
import Modal from '../modal'
import './Home.css';
import { useAuth } from '../../context/index';

const PagesHome = () => {
  const { setToken } = useContext(StoreContext);



  const[screen,setScrean] = useState(1) //deixo como padrão para renderizar minha primeira opção.


const [modal,setModal] = useState(false) //tenho que passar pro filho o estado do pai (pai é a home> e é a  home que fala quando que vai abrir ou fechar e não o contrário) inicio o meu modal fechado (false)

  function clicar(inteiro){ //troca o estado v ou f
	setModal(!modal) //negando v negando f
	setScrean(inteiro) //passando o meu valor inteiro (1) para minha setScrean guardar o valor que eu quero renderizar
	  
  }

  //criando um estado para armazenar o valor da tela que eu quero renderizar e passar esse valor para o modal

  const{user}=useAuth() // essa função eu utilizo para importar o user em qualquer lugar do código. 
  useEffect(()=> {
	  console.log(
		  user
	  )
  },[])
  
  return (
 <div>
	 <h1 >
	 { typeof(user) !==  'object'? user: <> </>}  {/* não posso printar um objeto diretamente. Esse ternário diz : se o tipo usuário não for um objeto eu mostro usuário. E o tipo usuário é uma String */} 
	 </h1>
	 

<div class="social-box">
    <div class="container">
     	<div class="row">
			 
			    <div class="col-lg-4 col-xs-12 text-center">
					
					<div class="box">
                       
						<div class="box-title">
							<h3>AEDs I (DCE670)</h3>
						</div>
						<div class="box-text">
							<span>Sejam bem vindos a esse espaço virtual.A disciplina está sob responsabilidade do professor Paulo Alexandre Bressan. Visite esse espaço com frequência para não perder as datas das atividades e provas.</span>
						</div>
						<div class="box-btn">
								
						    <a href="#" onClick={()=> {clicar(1)}}>Datas de entrega</a> {/*passando valor inteiro que é a tela que eu quero renderizar */}
						</div>
					 </div>
				</div>	 
				
				 <div class="col-lg-4 col-xs-12  text-center">
					<div class="box">
					   
						<div class="box-title">
							<h3>Empreendedores em Informática (DCE675)	</h3>
						</div>
						<div class="box-text">
            <span>Sejam bem vindos(as) á disciplina de Empreendedores em Informática.<p>Professoror: Ricardo Menezes</p> <p>Bom semestre á todos!</p>
                
              </span>
						</div>
						<div class="box-btn">
						    <a href="#" onClick={()=> {clicar(2)}}>Datas de entrega</a>
						</div>
					 </div>
				</div>	 
				
				 <div class="col-lg-4 col-xs-12 text-center">
					<div class="box">
                       
						<div class="box-title">
							<h3>Linguagens de Programação (DCE743)</h3>
						</div>
						<div class="box-text">
							<span>Sejam bem vindos(as) á disciplina de Linguagens de Programação.<p>Professora: Adriana Ávila</p> <p>email: adriana.avila@unifal-mg.edu.br</p></span>
						</div>
						<div class="box-btn">
						    <a href="#">Datas de entrega</a>
						</div>
					 </div>
				</div>	 
				
				<div class="col-lg-4 col-xs-12 text-center">
					<div class="box">
                       
						<div class="box-title">
							<h3>Programação Funcional (DCE673)</h3>
						</div>
						<div class="box-text">
							<span> Sejam bem vindos(as) á disciplina de Programação Funcional.<p>Professor: Eliseu Miguel</p> <p>email: eliseu-miguel@unifal-mg.edu.br</p></span>
						</div>
						<div class="box-btn">
						    <a href="#">Datas de entrega</a>
						</div>
					 </div>
				</div>	 
				
				 <div class="col-lg-4 col-xs-12 text-center">
					<div class="box">
					   
						<div class="box-title">
							<h3>Programação Lógica (DCE672)</h3>
						</div>
						<div class="box-text">
							<span>Sejam bem vindos a esse espaço virtual. professor: Luiz Eduardo Silva. Visite esse espaço com frequência para manter-se sempre informado(a).</span>
						</div>
						<div class="box-btn">
						    <a href="#">Datas de entrega</a>
						</div>
					 </div>
				</div>	 
				
				 <div class="col-lg-4 col-xs-12 text-center">
					<div class="box">
						<div class="box-title">
							<h3>Orientação a Objetos (DCE530)</h3>
						</div>
						<div class="box-text">
							<span>Olá! Sejam bem vindos a disciplina. Qualquer dúvida entrem em contato pelo fórum "Dúvidas e sugestões para a disciplina"</span>
						</div>
						<div class="box-btn">
						    <a href="#">Datas de entrega</a>
						</div>
					 </div>
				</div>
		
		</div>		
    </div>

	<Modal modal={modal} screen={screen} />  {/* modal dentro da chavinha é o que estou trocando o V F | screen={screen} estou passando o valor inteiro para minha screen que carrega minha opçao */}
	
</div>
 </div> 

  );
};

export default PagesHome;
