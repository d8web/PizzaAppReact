import React from 'react'
import {
    HeaderArea,
    HeaderContainer,
    LogoArea,
    LogoItem,
    BannerItem
} from './styles'

const Header = () => {
    return (
        <HeaderArea>
            <HeaderContainer>
                <LogoArea>
                    <LogoItem src="assets/media/logo.png"/>
                </LogoArea>
                <BannerItem src="assets/media/tomato.png"/>
            </HeaderContainer>
        </HeaderArea>
    )
}

export default Header
