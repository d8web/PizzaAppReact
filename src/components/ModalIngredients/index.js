import React from 'react'
import {
    ModalIngredientsArea,
    ModalContainerIngredients,
    Button
} from './styled'

const ModalIngredients = ({onClick, data}) => {

    const handleCloseModalIngredients = () => {
        onClick()
    }

    return (
        <ModalIngredientsArea>
            <ModalContainerIngredients>
                Ingredientes da Pizza de {data.name}<br/><br/>
                {data.ingredientes.map((item, k)=>(
                    <div key={k}>
                        {item.label}
                    </div>
                ))}
                <Button
                    onClick={handleCloseModalIngredients}
                >
                    Fechar
                </Button>
            </ModalContainerIngredients>
        </ModalIngredientsArea>
    )
}

export default ModalIngredients
