
import { useEffect, useState } from 'react';
import { Wrapper, Logo, ToggleWrapper } from './styles';
import logo from '../../assets/img/logo.png'

function Header() {
    const [scrollToggle, setScrollToggle] = useState(false)

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 225) {
                setScrollToggle(true)
            } if (window.scrollY < 225) {
                setScrollToggle(false)
            }
        });
        return () => {
            window.removeEventListener('scroll', addEventListener);
        };
    }, []);


    if (scrollToggle) {
        return (
            <ToggleWrapper>
                <Logo src={logo} alt='logo' />
            </ToggleWrapper>
        )
    } else {
        return (
            <Wrapper>
                <Logo src={logo} alt='logo' />
            </Wrapper>
        )

    }
}

export default Header
