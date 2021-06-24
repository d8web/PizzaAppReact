import React from "react";
import {
    FormAreaItem,
    PizzaItemArea
} from './styled'

import ModalPizza from "../ModalPizza";
import MyModalIngredients from "../ModalIngredients"

import PizzasArray from './PizzasArray'
const sabores = [
  {
    label: "1 Sabor",
    value: 1,
  },
  {
    label: "2 Sabores",
    value: 2,
  }
];

const bordas = [
    {
        label: "Sem Borda",
        value: 1,
    },
    {
        label: "Chocolate",
        value: 2,
    },
    {
        label: "Cheedar",
        value: 3,
    },
    {
        label: "Queijo",
        value: 4,
    }
]

class FormArea extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sabor: 1,
            borda: 1,
            pizzaSelected: 0,
            pizzas: PizzasArray,
            modal: false,
            modalIngredients: false
        };

        this.handleChangeSabor = this.handleChangeSabor.bind(this)
        this.handleChangeBorda = this.handleChangeBorda.bind(this)
        this.handleChangeModal = this.handleChangeModal.bind(this)
        this.handleCloseModal = this.handleCloseModal.bind(this)
        this.handleOpenModalIngredients = this.handleOpenModalIngredients.bind(this)
        this.handleCloseIngredientsModal = this.handleCloseIngredientsModal.bind(this)
    }
  
    handleChangeSabor(e) {
        this.setState({ sabor: e.target.value });
    }

    handleChangeBorda(e) {
        this.setState({ borda: e.target.value })
    }

    handleChangeModal(e) {
        this.setState({ modal: true })
    }

    handleCloseModal(k) {
        this.setState({ modal: false })
        this.setState({ pizzaSelected: k })
    }

    handleOpenModalIngredients(e) {
        this.setState({ modalIngredients: true })
    }

    handleCloseIngredientsModal(e) {
        this.setState({ modalIngredients: false })
        //console.log(this.state.modalIngredients)
    }
  
    render() {
        return (
            <>
                {this.state.modal &&
                    <ModalPizza
                        data={this.state.pizzas}
                        pizzaSelected={this.state.pizzaSelected}
                        onClick={this.handleCloseModal}
                    />
                }
                {this.state.modalIngredients &&
                    <MyModalIngredients
                        onClick={this.handleCloseIngredientsModal}
                        data={this.state.pizzas[this.state.pizzaSelected]}
                    />
                }
                <FormAreaItem>
                    <div className="select-container fs-m">
                        Escolha quantos sabores
                    </div>
                    <div className="select-container fs-m">
                        Escolha uma borda
                    </div>
                </FormAreaItem>
                <FormAreaItem>
                    <div className="select-container">
                        <div className="flex-container">
                            <img src="assets/media/icon-pizza.png" style={{width: 60, height: 60}} />
                            <select value={this.state.sabor} onChange={this.handleChangeSabor}>
                                {sabores.map((option,k) => (
                                    <option
                                        key={k}
                                        value={option.value}
                                    >
                                        {option.label}
                                    </option>
                                ))}
                            </select>
                        </div>
                        
                        <div className="flex-container">
                            <img src="assets/media/icon-pizza.png" style={{width: 60, height: 60}} />
                            <select value={this.state.borda} onChange={this.handleChangeBorda}>
                                {bordas.map((option,k) => (
                                    <option
                                        key={k}
                                        value={option.value}
                                    >
                                        {option.label}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>
                </FormAreaItem>

                <PizzaItemArea>
                    <div className="img-area-pizza" img="assets/media/tabua.png">
                        {this.state.sabor == 1 &&
                            <img
                                src={this.state.pizzas[this.state.pizzaSelected].img}
                                onClick={this.handleChangeModal}
                            />
                        }
                        {this.state.sabor == 2 &&
                            <div className="two-pizzas">
                                <div>Escolha o Sabor 1</div>
                                <div>Escolha o Sabor 2</div>
                            </div>
                        }
                    </div>
                    <div className="info-area-pizza">
                        <h3>Pizza de {this.state.pizzas[this.state.pizzaSelected].name}</h3>
                        {this.state.pizzas[this.state.pizzaSelected].ingredientes.map((ingredient, k)=>(
                            <div key={k} onClick={this.handleOpenModalIngredients}>
                                <p>{ingredient.label}</p>
                            </div>
                        ))}
                        <button className="button-action">Adicionar ao Carrinho</button>
                    </div>
                </PizzaItemArea>

            </>
        );
    }
}

export default FormArea;