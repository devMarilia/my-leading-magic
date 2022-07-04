import styled from "styled-components";

export const ContainerCard = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column ;
  justify-content: center;
  align-items: center;

  .content-cad-row {
    display: flex;
    flex-direction: row ;
    
  }
  .content-card {
    //styled card
    background-color: var(--color-tertiary);
    width: 13rem;
    height: 20rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: end;
    padding: 1rem;
    margin: 1rem;
    .card {
      //styled card
      height: 20rem;
      width: 100%;
      /* display: flex;
            flex-direction: column;
            justify-content: end;
            align-items: flex-start; */
      display: flex;
      justify-content: center;
      flex-direction: column;
    }
    .card img {
      //styled card image
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    .card strong {
      //styled card title
      font-size: 1rem;
      font-weight: 400;
      color: #434343;
    }
    .card button {
      //styled card button
      background-color: var(--color-primary);
      border: 1px solid #434343;
      color: #434343;
      padding: 0.5rem;
      font-size: 1rem;
      font-weight: 400;
      border-radius: 5px;
      cursor: pointer;
      transition: all 0.3s ease-in-out;
      &:hover {
        background-color: var(--color-tertiary);
        color: var(--color-primary);
      }
    }
  }
  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    flex-direction: column;
    .content-cad-row {
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 100%;
        width: 100%;
        margin: 1rem;

    }
  }
`;
