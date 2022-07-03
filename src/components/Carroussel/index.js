import React, { useEffect , useState }from 'react'
import { ContainerCarroussel } from './styled'

function Carroussel() {
//9. Criar um useEffect para carregar os dados do carroussel
const [data, setData] = useState([]);
// //2. criar estrutrura useEffect
useEffect(() => {
    fetch('http://localhost:3000/services/static.json')//3. criar a url do carroussel
      .then((response) => response.json())//4. transformar o json em objeto
        .then((data) => setData(data))//5. setar o data com o objeto
        .catch((error) => console.error(error))//6. tratar erro caso ocorra
  }, []);

    if(!data || !data.length) return null; //10. verificar se o array está vazio

  return (
    <ContainerCarroussel>
      
        <div className="content-carroussel">
        {data.map((item) => {
          const { id, name, image } = item;
          return (
            <div className="carroussel-item"  key={id}>
                <img src={image} alt={name}/>
            </div>             
           
           );
        })}
         </div>
    </ContainerCarroussel>
  )
}

export default Carroussel;