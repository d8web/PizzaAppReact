import styled from 'styled-components'

export const ModalArea = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.3);
    z-index: 10;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const ModalContainer = styled.div`
    width: 100%;
    max-width: 1300px;
    height: calc(100vh - 100px);
    padding: 20px;
    border-radius: 20px;
    background-color: #db1818;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 15px;
    overflow-x: auto;
`

export const ModalCard = styled.div`
    background-color: #f0cf00;
    display: flex;
    align-items: center;
    padding: 20px;
    cursor: pointer;
    border-radius: 20px;

    .info-pizza {
        display: flex;
        flex-direction: column;

        h2 {
            font-size: 22px;
            font-weight: 500;
            margin-bottom: 10px;
        }
    }
`

export const ModalImg = styled.img`
    width: 140px;
    height: auto;
    margin-right: 20px;
`