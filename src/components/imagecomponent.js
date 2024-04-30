import React, { useState } from 'react';
import EstadisticasComponente from './emogisbox';
import MenuEmergente from './menuemergente'; // Importa el componente MenuEmergente
import '../style/imagencomponente.css'; // Importa el archivo CSS para estilos personalizados

function ImagenComponente({ data }) {
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  // Comprobamos si hay datos antes de intentar acceder a ellos
  if (!data) {
    return <div>No hay datos disponibles</div>;
  }

  // Extraemos los datos necesarios del objeto
  const { url, width, height } = data;

  // Renderizamos la imagen y la información adicional
  return (
    <div className="imagen-container">
      <img src={url} alt="Imagen" className="imagen" />
      <MenuEmergente mostrar={menuVisible} /> {/* Pasar el estado menuVisible como una propiedad */}
      <div className="opciones">
        <div className="punto" onClick={toggleMenu}></div>
        <div className="punto" onClick={toggleMenu}></div>
        <div className="punto" onClick={toggleMenu}></div>
      </div>
      <EstadisticasComponente
        cryCount={data.stats.cryCount}
        laughCount={data.stats.laughCount}
        likeCount={data.stats.likeCount}
        commentCount={data.stats.commentCount}
        heartCount={data.stats.heartCount}
      />
    </div>
  );
}

export default ImagenComponente;
