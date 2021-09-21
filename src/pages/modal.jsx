import React, { useEffect } from 'react';
import './modal.css';
import AEDS1 from './../AEDS1';

const Modal = ({ modal, screen }) => { /* pasando a propriedade que está sendo trocada | screen pra ter acesso a tela que eu quero exibir*/
  useEffect(() => { /*useefect monitora as mudanças da variável */
    if (!modal === false) { // como meu modal inicou com false (fechado) eu tenho que usar a função acao
      acao()
    } else //senão
      fechar()
  }, [modal])

  function ModalContent() {
    switch (screen) {
      case 1:
        return <AEDS1/>

      case 2:
        return <></>

      case 3:
        return <></>
      case 4:
        return <div/>
      case 5:
        return <></>
      case 6:
        return <></>



    }
  }



  function acao() {

    let modal = document.querySelector('.modal')

    modal.style.display = 'block'; //estou mudando minha ação de no para block
  }


  function fechar() {
    let modal = document.querySelector(".modal")

    modal.style.display = 'none';
  }


  return (
    <div>

      <div class="modal">
        <div onClick={() => { acao() }} class="box-btn">
        {ModalContent()}
        </div>

        <div onClick={() => { fechar() }} class="fechar">

        </div>
      </div>

    </div>


  );


}


export default Modal;

