import { TopBar } from '../TopBar';
import { ContainerHeader, HeaderIcons } from './styles';
import Logo from '../../assets/images/logo/logo-seri.e.svg';
import { HeartStraight, User, Handbag, MagnifyingGlass } from 'phosphor-react';

const NavCategories = [
    {
        id: '5',
        name: 'Shop',
        link: '/'
    },
    {
        id: '7',
        name: 'Lançamentos',
        link: '/'
    },
    {
        id: '9',
        name: 'Born in Chaos',
        link: '/'
    }
]

export function Header() {

    const categories = NavCategories.map((categorie) => {
        return (
            <a href={categorie.link} key={categorie.id}>
                { categorie.name }
            </a>
        )
    })

    return (
        <>
            <TopBar />
            <ContainerHeader>
                <img src={Logo} alt='Logo Seri.e' />
                <nav>
                    { categories }
                </nav>
                <HeaderIcons>
                    <div>
                        <input placeholder='Pesquise seu tapete' />
                        <MagnifyingGlass size={16} />
                    </div>
                    <a href='/wishlist'>
                        <HeartStraight size={16} />
                    </a>
                    <a href='/wishlist'>
                        <User size={16} />
                    </a>
                    <a href='/wishlist'>
                        <Handbag size={16} />
                        (99)
                    </a>
                </HeaderIcons>
            </ContainerHeader>
        </>
    )
}