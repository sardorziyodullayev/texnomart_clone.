import { Container } from '@mui/material';
import Advertising from '../../components/advertising/Advertising';
import Footer from '../../components/footer/Footer';
import Header from '../../components/Header/Header';
import HeroBanner from '../../components/hero-banner/HeroBanner';
import InstallmentInfo from '../../components/installment-info/InstallmentInfo';
import Products from '../../components/products/Products';
import SwiperBrand from '../../components/swiper-brand/SwiperBrand';
import SwiperCategories from '../../components/swiper-categories/SwiperCategories';

const Home = () => {
    return (
        <>
            <Header />
            <HeroBanner />
            <Container maxWidth="xl">
                <SwiperBrand />
            </Container>
            <Container maxWidth="xl">
                <SwiperCategories />
            </Container>
            <Container maxWidth="xl">
                <Products />
            </Container>
            <Container maxWidth="xl">
                <Advertising />
            </Container>
            <Container maxWidth="xl">
                <InstallmentInfo />
            </Container>
            <Footer />
        </>
    );
};

export default Home;
