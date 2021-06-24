import styled from 'styled-components'

export const FormAreaItem = styled.div`
    width: 100%;
    max-width: 1200px;
    margin: auto;
    display: flex;

    .fs-m {
        font-size: 20px;
        font-weight: 500;
        padding-left: 3px;
    }

    .select-container {
        flex: 1;
        display: flex;
        align-items: center;

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
                margin: 5px 20px;
                height: 60px;
                border: none;
                padding: 10px;
                cursor: pointer;
            }

            img {
                margin-left: 20px;
            }
        }

        
    }
`

export const MyForm = styled.form`
    width: 100%;
    display: flex;
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

        img {
            width: 380px;
            margin-top: -4px;
            margin-left: -4px;
            height: auto;
            cursor: pointer;
        }
        .two-pizzas {
            width: 100%;
            padding: 100px;
            color: #fff;
            display: flex;
            justify-content: space-between;
            font-size: 24px;

            div {
                flex: 1;
                display: flex;
                justify-content: center;
                align-items: center;
                border: 4px solid #999;
            }
        }
    }
`