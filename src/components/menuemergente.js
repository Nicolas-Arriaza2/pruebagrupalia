import React from 'react';
import '../style/menuemergente.css'; // Importa el archivo CSS para estilos personalizados

function MenuEmergente({ mostrar }) {
  if (!mostrar) {
    return null;
  }

  return (
    <div className="menu-emergente">
      <a href="https://wa.link/o5nyst" target="_blank" rel="noopener noreferrer" className="opcion">Whatsapp dev</a><br />
      <a href="https://www.linkedin.com/in/nicol%C3%A1s-arriaza-verreni-b5171b226/" target="_blank" rel="noopener noreferrer" className="opcion">Linkedln dev</a><br />
      <a href="https://drive.google.com/file/d/1MWwFmXfmYPe1coRkx40RtRYt_mksT2E-/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="opcion">CV dev</a><br />
    </div>
  );
}

export default MenuEmergente;
