import React from 'react';
import IconoInstagram from '../../images/redes/instagram.png';
import '../Footer/Footer.css';



const toInstagram = () => {
  window.open('https://www.instagram.com/valenn.ds3/');
};

export default function Footer() {
  return (
    <>
      <footer>
        <div>
          <img src={IconoInstagram} alt={'instagram'} onClick={toInstagram} />
        </div>
        <p className="footer_txt">Copyright &copy; 2022 - <b>FachiStyle</b> - Todos los derechos reservados.</p>
      </footer>
    </>
  );
}