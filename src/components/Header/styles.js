import styled from 'styled-components'

export const HeaderArea = styled.div`
    position: sticky;
    z-index: 10;
    width: 100%;
    height: 160px;
    background-color: #ffcf00;
`

export const HeaderContainer = styled.div`
    width: 100%;
    max-width: 1200px;
    margin: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media screen and (max-width: 1050px) {
        flex-direction: column;
    }
`

export const LogoArea = styled.div`
    flex: 1;
`

export const LogoItem = styled.img`
    width: 250px;
    height: auto;
    margin-top: 70px;

    @media screen and (max-width: 1050px) {
        margin-top: 0px;
        width: 150px;
    }
`

export const BannerItem = styled.img`
    width: 380px;
    margin-top: 70px;
    height: auto;

    @media screen and (max-width: 1050px) {
        margin-top: 0px;
        width: 150px;
    }
`