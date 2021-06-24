import styled from 'styled-components'

export const ModalIngredientsArea = styled.div`
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

export const ModalContainerIngredients = styled.div`
    width: 100%;
    max-width: 500px;
    height: calc(100vh - 100px);
    padding: 20px;
    border-radius: 20px;
    background-color: #db1818;
    overflow-x: auto;
    color: #fff;
    display: block;
`

export const Button = styled.button`
    margin-top: 30px;
    padding: 8px 32px;
`