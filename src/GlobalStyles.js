import { createGlobalStyle } from 'styled-components'

const ResetStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    }

    img {
        width: 100%;
    }
`

export default ResetStyles