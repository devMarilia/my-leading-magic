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
            <img src="https://www.flaticon.com/free-icon/arrow-right_318091#term=right%20arrow&page=1&position=1" alt="Scroll Right" />
          </button>
          <button onClick={handleRightClick}>
           
            <img src="https://www.flaticon.com/free-icon/arrow-right_318091#term=right%20arrow&page=1&position=1" alt="Scroll Right" />
          </button>
        </div>
      </div>
      </ContainerCarroussel>
    );
  }

export default Carroussel;