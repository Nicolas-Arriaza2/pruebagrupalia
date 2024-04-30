import React, { useEffect, useState } from 'react';
import ImagenComponente from './imagecomponent';
import '../style/ListaDeImagenes.css'; // Archivo CSS para estilos personalizados

function ListaDeImagenes() {
  const [jsonData, setJsonData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://civitai.com/api/v1/images');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const jsonData = await response.json();
        console.log(jsonData.items[0]);
        // Ordenar por fecha de la más reciente a la más antigua
        const sortedData = jsonData.items.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
        setJsonData({ items: sortedData });
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container">
      <div className="image-grid">
        {jsonData &&
          jsonData.items.map((item, index) => (
            <div key={index} className={`image-container col-${index % 4 + 1}`}>
              <ImagenComponente data={item} className="card-img-top" />
              <div className="card-body">
                <p className="card-text">{/* Aquí puedes agregar cualquier texto adicional */}</p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default ListaDeImagenes;
