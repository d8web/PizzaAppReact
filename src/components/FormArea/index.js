import React from "react";
import {
    FormAreaItem,
    PizzaItemArea,
    CartArea,
    CartHeader,
    CartBody
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
            pizzaDoisSabores: [
                {
                    idPizza: 1,
                    id: 1,
                    name: 'Pizza Test',
                    price: 34,
                    img: 'assets/media/pizzameia.png'
                },
                {
                    idPizza: 2,
                    id: 2,
                    name: 'Pizza Calabresa',
                    price: 34,
                    img: 'assets/media/pizzameia.png'
                }
            ],
            cart: [],
            cartOpen: false,
            modal: false,
            modalIngredients: false
        };

        this.handleChangeSabor = this.handleChangeSabor.bind(this)

        this.handleChangeBorda = this.handleChangeBorda.bind(this)

        this.handleChangeModal = this.handleChangeModal.bind(this)

        this.handleCloseModal = this.handleCloseModal.bind(this)

        this.handleOpenModalIngredients = this.handleOpenModalIngredients.bind(this)

        this.handleCloseIngredientsModal = this.handleCloseIngredientsModal.bind(this)

        this.handleSaborUmClick = this.handleSaborUmClick.bind(this)

        this.handleSaborDoisClick = this.handleSaborDoisClick.bind(this)

        this.handleCartAdd = this.handleCartAdd.bind(this)

        this.handleCartOpen = this.handleCartOpen.bind(this)
    }
  
    handleChangeSabor(e) {
        this.setState({ sabor: parseInt(e.target.value) })
    }

    handleChangeBorda(e) {
        this.setState({ borda: parseInt(e.target.value) })
    }

    handleChangeModal(e) {
        //console.log(e.target)
        this.setState({ modal: true })
    }

    handleCloseModal(k) {
        this.setState({ pizzaSelected: k })
        this.setState({ modal: false })
    }

    handleOpenModalIngredients(e) {
        this.setState({ modalIngredients: true })
    }

    handleCloseIngredientsModal(e) {
        this.setState({ modalIngredients: false })
        //console.log(this.state.modalIngredients)
    }

    handleSaborUmClick(e) {
        alert('add pizza 1')
        this.state.pizzaDoisSabores.push({
            id: this.state.pizzas[this.state.pizzaSelected].id,
            name: this.state.pizzas[this.state.pizzaSelected].name,
            image: this.state.pizzas[this.state.pizzaSelected].rigthImg,
            borda: this.state.borda,
            qt: 1,
            price: this.state.pizzas[this.state.pizzaSelected].preço,
        })
        console.log(this.state.pizzaDoisSabores)
    }

    handleSaborDoisClick(e) {
        this.handleChangeModal()
        alert('add pizza 2')
    }

    handleCartAdd(e) {
        //alert('add cart')
        //console.log(this.state.pizzas[this.state.pizzaSelected])

        let id = this.state.pizzas[this.state.pizzaSelected].id
        let index = this.state.cart.findIndex(item => item.id === id)
        if(index > -1) {
            this.state.cart[index].qt++
        } else {
            this.state.cart.push({
                id,
                name: this.state.pizzas[this.state.pizzaSelected].name,
                image: this.state.pizzas[this.state.pizzaSelected].img,
                borda: this.state.borda,
                qt: 1,
                price: this.state.pizzas[this.state.pizzaSelected].preço,
            })
        }

        this.setState({ cart: this.state.cart })
        //console.log(this.state.cart)
    }

    handleCartOpen(e) {
        this.setState({ cartOpen: !this.state.cartOpen })
        //alert('open')
    }
  
    render() {
        return (
            <>
                <FormAreaItem>
                    <div className="select-container">
                        <div className="flex-container">
                            <img src="assets/media/icon-pizza.png" />
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
                            <img src="assets/media/icon-pizza.png" />
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
                        {this.state.sabor === 1 &&
                            <img
                                src={this.state.pizzas[this.state.pizzaSelected].img}
                                onClick={this.handleChangeModal}
                            />
                        }
                        {this.state.sabor === 2 &&
                            <div className="two-pizzas">
                                <div onClick={this.handleSaborUmClick}>
                                    <img src="assets/media/pizzameia.png" /> {/** Inserir fotos dinamicas aqui e na imagem abaixo */}
                                </div>
                                <div onClick={this.handleSaborDoisClick}>
                                    <img src="assets/media/pizza3meia.png" />
                                </div>
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
                        <div style={{ width: "100%", fontSize: 22, marginTop: 20, marginBottom: 10, fontWeight: 600 }}>
                            R$ {this.state.pizzas[this.state.pizzaSelected].preço.toFixed(2)}
                        </div>
                        <button
                            className="button-action"
                            onClick={this.handleCartAdd}
                        >
                            Adicionar ao Carrinho
                        </button>
                    </div>
                </PizzaItemArea>
                
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

                {this.state.cart.length > 0 &&
                    <CartArea>
                        <CartHeader onClick={this.handleCartOpen}>
                            Carrinho {this.state.cart.length}
                        </CartHeader>

                        {this.state.cartOpen &&
                            <CartBody>

                                {this.state.cart.map((item, k)=>(
                                    <ul key={k} style={{display: "flex", listStyle: "none"}}>
                                        <li style={{margin: 10, fontSize: 22}}>{item.qt}</li>
                                        <li style={{margin: 10, fontSize: 22}}>{item.name}</li>
                                        <li style={{margin: 10, fontSize: 22}}>R$ {item.price.toFixed(2)}</li>
                                    </ul>
                                ))}

                            </CartBody>
                        }
                    </CartArea>
                }
            </>
        );
    }
}

export default FormArea;