import { FullBanner } from './components/FullBanner';
import { MainContainer } from './styles';
import FullBannerImage from '../../assets/images/banners/Banner1.svg';
import { GridBanner } from './components/GridBanner';

export function Home() {
    return (
        <>
            <FullBanner image={FullBannerImage} title="Lorem ipsum dolor." link='/' />
            <GridBanner />
            <MainContainer>
            
            </MainContainer>
        </>
        
    )
}