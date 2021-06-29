import styled from 'styled-components'

export const FormAreaItem = styled.div`
    width: 100%;
    max-width: 1200px;
    margin: auto;
    display: flex;
    align-items: center;

    @media screen and (max-width: 900px) {
        flex-direction: column;
    }

    .fs-m {
        font-size: 20px;
        font-weight: 500;
        padding-left: 3px;
    }

    .select-container {
        flex: 1;
        display: flex;
        align-items: center;
        width: 100%;

        @media screen and (max-width: 600px) {
            flex-direction: column;
        }

        .flex-container {
            width: 100%;
            display: flex;
            align-items: center;
            margin: 10px;
            border-radius: 60px;

            select {
                font-size: 20px;
                width: 100%;
                outline: none;
                margin: 5px;
                height: 50px;
                border: none;
                padding: 10px;
                cursor: pointer;

                @media screen and (max-width: 1100px) {
                    margin: 0 10px;
                }                
            }

            img {
                margin-left: 20px;
                width: 50px;
                height: auto;
            }
        }

        
    }
`

export const MyForm = styled.form`
    width: 100%;
    display: flex;
    align-items: center;
`

export const FormLabel = styled.div`
    flex: 1;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    flex-wrap: wrap;
    margin: 0 10px;
    height: 50px;
    border: solid .5px #333;
    border-radius: 30px;
`

export const PizzaItemArea = styled.div`
    width: 100%;
    max-width: 1200px;
    margin: auto;
    display: flex;
    align-items: center;
    margin-top: 60px;

    @media screen and (max-width: 1100px) {
        flex-direction: column;
    }

    .img-area-pizza, .info-area-pizza {
        flex: 1;
    }

    .info-area-pizza {
        .button-action {
            margin-top: 20px;
            padding: 10px 42px;
            outline: none;
            background-color: #db1818;
            color: #fff;
            font-size: 18px;
            border: none;
            cursor: pointer;
            border-radius: 30px;
            font-weight: 500;
        }
        h3 {
            font-size: 26px;
            font-weight: 500;
            margin-bottom: 20px;
        }
        p {
            margin-bottom: 10px;
            font-size: 18px;
            font-weight: 400;
        }
        @media screen and (max-width: 1100px) {
            text-align: center;
        }
    }

    .img-area-pizza {
        height: 500px;
        background-image: url('assets/media/tabua.png');
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        display: flex;
        justify-content: center;
        align-items: center;

        @media screen and (max-width: 1100px) {
            margin-bottom: 50px;
            padding: 10px;
        }

        img {
            width: 380px;
            margin-top: -4px;
            margin-left: -4px;
            height: auto;
            cursor: pointer;

            @media screen and (max-width: 500px) {
                width: 100%;
                margin-top: 0px;
                margin-left: 0px;
            }
        }
        .two-pizzas {
            width: 63%;
            height: 76%;
            color: #333;
            display: flex;
            justify-content: space-between;
            align-items: center;
            font-size: 22px;
            margin-right: 3px;
            margin-top: -10px;
            border-radius: 300px;

            @media screen and (max-width: 1100px) {
                width: 400px;
                height: 400px;
            }

            @media screen and (max-width: 500px) {
                width: 280px;
                height: 280px;
                font-size: 18px;
            }

            div {
                flex: 1;
                display: flex;
                justify-content: center;
                align-items: center;
                cursor: pointer;
                height: 100%;
                color: #fff;

                &:first-child {
                    border-top-left-radius: 200px;
                    border-bottom-left-radius: 200px;
                }

                &:last-child {
                    border-bottom-right-radius: 200px;
                    border-top-right-radius: 200px;
                }

                img {
                    margin-top: 3px;
                    margin-left: 3px;
                    width: 100%;
                }
            }
        }
    }
`

export const CartArea = styled.div`
    position: fixed;
    bottom: 0;
    right: 20px;
    z-index: 999;
    width: 280px;
    transition: all 0.3s ease-in-out;
    color: #fff;

    @media screen and (max-width: 500px) {
        top: 0;
        width: 100%;
        height: 50vh;
        left: 0;
        z-index: 99;
    }
`

export const CartHeader = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    padding: 0px 22px;
    height: 50px;
    background-color: #db1818;
    border-top-left-radius: 30px;
    border-top-right-radius: 30px;
    cursor: pointer;
    font-size: 20px;
    font-weight: 500;
    border-bottom: 2px solid #333;
`

export const CartBody = styled.div`
    width: 100%;
    height: 300px;
    background-color: #db1818;
    transition: display 0.3s ease-in-out;
    display: ${props => props.open === true ? 'none' : 'block'}
`