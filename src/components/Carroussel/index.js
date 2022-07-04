import React, { useEffect , useState, useRef}from 'react'
import { ContainerCarroussel } from './styled'

function Carroussel() {
    const [data, setData] = useState([]);
    const carousel = useRef(null);
  
    useEffect(() => {
      fetch('http://localhost:3000/services/static.json')
        .then((response) => response.json())
        .then(setData);
    }, []);
  
    const handleLeftClick = (e) => {
      e.preventDefault();
      carousel.current.scrollLeft -= carousel.current.offsetWidth;
    };
  
    const handleRightClick = (e) => {
      e.preventDefault();
  
      carousel.current.scrollLeft += carousel.current.offsetWidth;
    };
  
    if (!data || !data.length) return null;
  
    return (
      <ContainerCarroussel>
        <div className="content">
        <div className="carousel" ref={carousel}>
          {data.map((item) => {
            const { id, name,  image } = item;
            return (
              <div className="item" key={id}>
                <div className="image">
                  <img src={image} alt={name} />
                </div>
              </div>
            );
          })}
        </div>
        <div className="buttons">
          <button onClick={handleLeftClick}>
            <img src="/src/images/216151_right_chevron_icon.png" alt="Scroll Left" />
          </button>
          <button onClick={handleRightClick}>
            <img src="/src/assets/images/216151_right_chevron_icon.png" alt="Scroll Right" />
          </button>
        </div>
      </div>
      </ContainerCarroussel>
    );
  }

export default Carroussel;