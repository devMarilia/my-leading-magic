import styled from 'styled-components';

export const ContainerCarroussel = styled.section`
    height: 90vh;
    max-width: 100%;
    width: 100%;
    display:flex ;

    .content-carroussel {
        background-color: red ;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        overflow: hidden;
        .carroussel-item {
            background-color: #fff ;
            width: 20%;
            height: 80%;
            display: flex;
            justify-content: center;
            align-items: center;
            position: relative;
            overflow: hidden;
        }
        .carroussel-item img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
        
    }
`;
