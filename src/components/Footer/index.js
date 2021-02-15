import React from 'react';
import { FooterBase } from './styles';
import Logo from '../../assets/img/fecflix.png';

function Footer() {
  return (
    <FooterBase>
      <a href="/">
        <img src={Logo} alt="Logo FECFLIX" />
      </a>
      <p>
        Orgulhosamente criado durante a
        {' '}
        <a href="/">
          Imersão React da Alura
        </a>
      </p>
    </FooterBase>
  );
}

export default Footer;
