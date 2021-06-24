import React, { useState } from 'react'
import {
    ModalArea,
    ModalContainer,
    ModalCard,
    ModalImg
} from './styled'

const ModalPizza = ({ data, selectedPizza, onClick }) => {

    const [ info, setInfo ] = useState(data)
    const [ pizzaSelected, setPizzaSelected ] = useState(selectedPizza)

    const handleClickPizza = (key) => {
        setPizzaSelected(key)
        onClick(key)
    }

    return (
        <ModalArea>
            <ModalContainer>
                {info.map((element, key) => (
                    <ModalCard
                        key={key}
                        onClick={()=>handleClickPizza(key)}
                    >
                        <ModalImg src={element.img}/>
                        <div className="info-pizza">
                            <h2>{element.name}</h2>
                            <p>R$ {element.preço.toFixed(2)}</p>
                            <p>{element.oferta === true ? 'Oferta' : ''}</p>
                        </div>
                    </ModalCard>
                ))}
            </ModalContainer>
        </ModalArea>
    )
}

export default ModalPizza
