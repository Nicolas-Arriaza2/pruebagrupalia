import React from 'react';

function EstadisticasComponente({ cryCount, laughCount, likeCount, commentCount, heartCount }) {
  return (
    <div style={{ position: 'relative' }}>
      {/* Cuadro transparente oscurecido */}
      <div style={{
        position: 'absolute',
        bottom: '0',
        left: '0',
        width: '100%',
        height: 'auto', /* Altura automática para acomodar el contenido */
        backgroundColor: 'rgba(0, 0, 0, 0.5)', /* Color oscuro con transparencia */
        color: 'white',
        textAlign: 'center',
        padding: '10px',
        display: 'flex', /* Presentación en línea */
        justifyContent: 'center', /* Centrar elementos horizontalmente */
        alignItems: 'center', /* Alineación vertical en el centro */
      }}>
        {/* Estadísticas */}
        <p>
          👍{likeCount} ❤️{heartCount} 😄{laughCount} 😢{cryCount} 
          <span style={{ backgroundColor: 'rgb(245, 159, 0)', padding: '2px 5px', borderRadius: '5px', marginLeft: '5px' }}>
            ⚡{commentCount}
          </span>
        </p>
      </div>
    </div>
  );
}

export default EstadisticasComponente;
