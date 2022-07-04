import styled from "styled-components";

export const ContainerBigCard = styled.section`
  display: flex;
  flex-direction: column;
  margin: 1rem;

  .content-big-card {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    height: 100%;
    margin: 1rem;
  }
  .big-card-content img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .big-card {
    height: 31.875rem;
    width: 31.875rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .big-card-info {
    height: 37.5rem;
    width: 31.875rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: var(--color-tertiary);
    color: var(--color-primary);
  }
  .big-card-info h1 {
    font-size: 3rem;
    font-weight: 400;
    margin-bottom: 1rem;
  }
  .big-card-info p {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }
  .big-card-button {
    background-color: var(--color-primary);
    border: 1px solid var(--color-primary);
    color: var(--color-tertiary);
    padding: 1rem;
    font-size: 1.5rem;
    font-weight: 400;
    border-radius: 5px;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    &:hover {
      background-color: var(--color-tertiary);
      color: var(--color-primary);
    }
  }

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column-reverse;
    height: auto;
    margin: 1rem;
    padding: 20px;
    .content-big-card {
      display: flex;
      flex-direction: column;

      margin: 1rem;
    }
    .big-card {
     width: 17.875rem;
    }
    .big-card-info {
      margin: 1rem;

    width: 17.875rem;

    }
    .big-card-content {{
          width: 100%;
          height: 100%;
          object-fit: cover;

    }

  }

  
`;
