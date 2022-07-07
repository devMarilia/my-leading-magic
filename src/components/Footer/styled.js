import styled from "styled-components";

export const ContainerFooter = styled.footer`
  display: flex;
    width: 100%;
    height: 50vh;
    background-color: var( --background-color-footer);
    color: var( --color-primary);

  .footer-deg {
    font-size: 1.2rem;
    color: var(--text-color);
    transform: rotate(270deg);
    margin-block: auto;
    margin-right: -2rem;
    margin-top: 3rem;
  }
  .rede-social{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-block: auto;
    gap: 1rem;
    
}
.rede-social a{
    width: 30px;
    color: var(--text-color);
    
}
.list-footer ul{
    display: flex;
    flex-direction: row ;
    justify-content: center;
    align-items: center;
  
}
.list-footer li, a{
    display: flex;
    align-items: center;
    justify-content: center;
    line-height: 1.5rem;
    font-size: 1rem;
    font-weight: 700;
}


.card li{
    display: flex;
    justify-content: center;
}

.card{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 1rem;
}
.content-footer{
    display: flex;
    display: flex;
    height: 10vh;
    /* margin-bottom: 3rem; */
    margin-top: 8rem;
}

.content-footer h2{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 16rem;
    font-size: 2.5rem;
    
}

@media (max-width: 768px){
    justify-content: center;
          align-items: center;
          height: 100vh;
     .footer-deg {
        transform: none;
        margin-right: 0;
        margin-top: 0rem;
    }
     .card {
        text-align: center;
        display: flex;
    }
    .content-footer{
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 1rem;
        margin-top: 0rem;
    }
    .content-footer h2{
        font-size: 1.5rem;
    } 
    .card ul{
        display: flex;
        flex-direction: row;
    }


    .icon{
        flex-direction: row;
    }
}

`;
