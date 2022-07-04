import styled from 'styled-components';

export const ContainerBanner = styled.section`
  background-color: red;
  height: 90vh;
  max-width: 100%;
  width: 100%;
  display:flex ;

  span {
    font-weight: 700;
  }

  hr {
    width: 40%;
  }

  .content-info-banner {
    width: 55%;
    display: flex;
    justify-content: end;
    align-items: center;
    background-color: var( --color-secondary) ;
  }
  .content-image-banner {
    width: 45%;
    background-color: var( --color-quaternary) ;
    background: white url('https://cf.shopee.com.br/file/c05246f0b2c4396dea2a779f71c12ef3') no-repeat center center;
  background-size: cover;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  }
  .info-banner {
    width: 45%;
  }
  .info-banner h1 {
    font-size: 3rem;
    font-weight: 400;
    color: var(--color-primary) ;
    margin-bottom: 1rem;
  }
  @media  (max-width: 700px) {
    .content-info-banner {
      width: 100%;
    }
    .content-image-banner {
      display: none ;
    }
    .info-banner {
      text-align: center ;
      width:100%;
    }
  }
`;
