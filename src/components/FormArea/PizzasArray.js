const PizzasArray = [
    {
        id: 1,
        name: 'Palmito',
        oferta: false,
        preço: 28,
        ingredientes: [
            {idIngrediente: 1, label:'Molho de tomate'},
            {idIngrediente: 2, label:'Queijo Mussarela'},
            {idIngrediente: 3, label:'Rodelas de Tomate'},
            {idIngrediente: 4, label:'Palmito fresco'},
            {idIngrediente: 5, label:'Queijo Parmesão'},
            {idIngrediente: 6, label:'Azeitona'},
            {idIngrediente: 7, label:'Orégano'},
        ],
        img: 'assets/media/pizza_palmito.png',
        imagemEsquerda: 'assets/media/pizza_palmito_esquerda.png',
        imagemDireita: 'assets/media/pizza_palmito_direita.png'
    },
    {
        id: 2,
        name: 'Frango',
        oferta: true,
        preço: 34,
        ingredientes: [
            {idIngrediente: 1, label:'Molho de tomate'},
            {idIngrediente: 2, label:'Queijo Mussarela'},
            {idIngrediente: 3, label:'Frango'},
            {idIngrediente: 4, label:'Catupity'},
            {idIngrediente: 5, label:'Orégano'},
        ],
        img: 'assets/media/pizza_frango.png',
        imagemEsquerda: 'assets/media/pizza_frango_esquerda.png',
        imagemDireita: 'assets/media/pizza_frango_direita.png'
    },
    {
        id: 3,
        name: 'Marguerita',
        oferta: true,
        preço: 29,
        ingredientes: [
            {idIngrediente: 1, label:'Molho de tomate'},
            {idIngrediente: 2, label:'Queijo Mussarela'},
            {idIngrediente: 3, label:'Rodelas de Tomate'},
            {idIngrediente: 4, label:'Orégano'},
            {idIngrediente: 5, label:'Manjericão'}
        ],
        img: 'assets/media/pizza_marguerita.png',
        imagemEsquerda: 'assets/media/pizza_marguerita_esquerda.png',
        imagemDireita: 'assets/media/pizza_marguerita_direita.png'
    },
    {
        id: 4,
        name: 'Vegetariana',
        oferta: false,
        preço: 42,
        ingredientes: [
            {idIngrediente: 1, label:'Molho de tomate'},
            {idIngrediente: 2, label:'Queijo Mussarela'},
            {idIngrediente: 3, label:'Rodelas de Tomate'},
            {idIngrediente: 4, label:'Champignon'},
            {idIngrediente: 5, label:'Brócolis-pré-cozido'},
            {idIngrediente: 6, label:'Azeitone'},
            {idIngrediente: 7, label:'Orégano'},
        ],
        img: 'assets/media/pizza_vegetariana.png',
        imagemEsquerda: 'assets/media/pizza_vegetariana_esquerda.png',
        imagemDireita: 'assets/media/pizza_vegetariana_direita.png'
    },
    {
        id: 5,
        name: 'Especial',
        oferta: true,
        preço: 40,
        ingredientes: [
            {idIngrediente: 1, label:'Molho de tomate'},
            {idIngrediente: 2, label:'Queijo Mussarela'},
            {idIngrediente: 3, label:'Bacon'},
            {idIngrediente: 4, label:'Calabresa'},
            {idIngrediente: 5, label:'Catupiry'},
        ],
        img: 'assets/media/pizza_especial.png',
        imagemEsquerda: 'assets/media/pizza_especial_esquerda.png',
        imagemDireita: 'assets/media/pizza_especial_direita.png'
    },
    {
        id: 6,
        name: 'Cogumelos',
        oferta: false,
        preço: 36,
        ingredientes: [
            {idIngrediente: 1, label:'Molho de tomate'},
            {idIngrediente: 2, label:'Queijo Mussarela'},
            {idIngrediente: 3, label:'Rodelas de Tomate'},
            {idIngrediente: 4, label:'Champignon'},
            {idIngrediente: 5, label:'Shitaqui'},
            {idIngrediente: 6, label:'Shimeji'},
            {idIngrediente: 7, label:'Orégano'},
        ],
        img: 'assets/media/pizza_cogumelos.png',
        imagemEsquerda: 'assets/media/pizza_cogumelos_esquerda.png',
        imagemDireita: 'assets/media/pizza_cogumelos_direita.png'
    },
    {
        id: 7,
        name: 'Chocolate',
        oferta: true,
        preço: 38,
        ingredientes: [
            {idIngrediente: 1, label:'Molho de tomate'},
            {idIngrediente: 2, label:'Queijo Mussarela'},
            {idIngrediente: 3, label:'Chocolate'},
        ],
        img: 'assets/media/pizza_chocolate.png',
        imagemEsquerda: 'assets/media/pizza_choco_meia_esquerda.png',
        imagemDireita: 'assets/media/pizza_choco_meia_direita.png'
    },
]

export default PizzasArray