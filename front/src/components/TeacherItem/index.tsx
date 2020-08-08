import React from "react";
import'./styles.css'
import whatsappIcon from "../../assets/images/icons/whatsapp.svg";


function TeacherItem() {
  return (
    <article className="teacher-item">
      <header>
        <img
          src="https://avatars2.githubusercontent.com/u/30188890?s=460&u=69537c093d4a233f86b5f5527b899969d09384b3&v=4"
          alt="Alexia Kattah"
        />
        <div>
          <strong>Alexia Kattah</strong>
          <span>Quimica</span>
        </div>
      </header>
      <p>Lorem ipsum</p>
      <footer>
        <p>
          Preço por hora <strong>R$ 80,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="" />
          Entrar em contato
        </button>
      </footer>
    </article>
  );
}

export default TeacherItem;
