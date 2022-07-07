import React, { useEffect , useState, useRef}from 'react'
import { ContainerCarroussel } from './styled'
import { FaAngleDoubleLeft, FaAngleDoubleRight } from 'react-icons/fa';

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
            <FaAngleDoubleLeft/>
          </button>
          <button onClick={handleRightClick}>
            <FaAngleDoubleRight/>
          </button>
        </div>
      </div>
      </ContainerCarroussel>
    );
  }

export default Carroussel;