import React from "react";
import { ContainerFooter } from "./styled";

function Footer() {
  return (
    <ContainerFooter>
      <div class="content-footer">
        <h2>Logo</h2>

        <div class="rede-social">
          <h2>Contatos</h2>
          <ul class="list-footer">
            <li>(00)0 0000-0000</li>
            <li>Rua Caminho da felicidade, 69</li>
            <li>girlsmagiccode@gmail.com</li>
          </ul>
        </div>

        <div class="rede-social">
          <h2>Links</h2>
          <ul class="list-footer">
            <li>
              <a href="#menu">Menu</a>
            </li>
            <li>
              <a href="#carousel">Produtos</a>
            </li>
            <li>
              <a href="#sobre">Sobre</a>
            </li>
            <li>
              <a href="#contato">Contatos</a>
            </li>
          </ul>
        </div>

        <div class="rede-social">
          <h2>Cartões</h2>
          <ul class="list-footer card">
            <li>
              <img
                src="https://www.paypalobjects.com/webstatic/mktg/logo/pp_cc_mark_37x23.jpg"
                alt=""
              ></img>
            </li>
            <li>
              <img
                src="https://www.paypalobjects.com/webstatic/mktg/logo/pp_cc_mark_37x23.jpg"
                alt="cartão"
              />
            </li>
            <li>
              <img
                src="https://www.paypalobjects.com/webstatic/mktg/logo/pp_cc_mark_37x23.jpg"
                alt="cartão"
              />
            </li>
          </ul>
        </div>

        <p class="footer-deg">Redes Sociais</p>
        <div class="rede-social icon">
          <a href="facebook.com">
            <img
              src="https://img.icons8.com/color/48/000000/facebook-new.png"
              alt="Facebook"
            />
          </a>
          <a href="instagram.com">
            <img
              src="https://img.icons8.com/color/48/000000/instagram-new.png"
              alt="Instagram"
            />
          </a>
          <a href="twitter.com">
            <img
              src="https://img.icons8.com/color/48/000000/twitter.png"
              alt="Twitter"
            />
          </a>
        </div>
      </div>
    </ContainerFooter>
  );
}

export default Footer;
