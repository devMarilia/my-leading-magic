import styled from "styled-components";

export const ContainerCarroussel = styled.section`
  height: 80vh;
  width: 100%;
  scroll-behavior: smooth;
  overflow-x: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .content {
    display: contents;
  }
  .content .carousel {
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    scroll-behavior: smooth;
    overflow-x: auto;
  }

  .content .carousel::-webkit-scrollbar {
    display: none;
  }

  .content .carousel .item {
    background-color: pink;
    margin: 10px;
    padding: 10px;
    width: 280px;
    border-radius: 16px;
    flex: none;
  }

  .content .carousel .item .image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .image {
    height: 400px;
  }

  .content .carousel .item .info {
    height: 140px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .content .carousel .item .info span {
    display: block;
    text-align: center;
    color: #1e1e1e;
    padding: 5px;
    border-radius: 10px;
  }

  .content .carousel .item .info .name {
    font-size: 1.2rem;
    font-weight: bold;
    margin: 10px 0;
    color: #00a8fb;
  }

  .content .carousel .item .info .oldPrice {
    font-size: 0.8rem;
    text-decoration: line-through;
    flex-grow: 1;
    color: #e81a5d;
  }

  .content .carousel .item .info .price {
    margin-top: 10px;
    font-size: 1.2rem;
    font-weight: bold;
    background-color: #ff7e3b;
  }

  .content .buttons {
    width: 100%;
    text-align: center;
  }
  .content .buttons button {
    background-color: transparent;
    border: none;
    cursor: pointer;
  }
  .content .buttons button:first-child img {
    transform: rotate(180deg);
  }
`;
