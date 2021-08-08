import React, { useState } from 'react';
import Slider from "react-slick";
import logo from '../../assets/logo.svg';
import { Container, Search, Logo, Wrapper, Map, CarouselTitle, Carousel } from './styled';
import TextField, { Input } from '@material/react-text-field';
import MaterialIcon from '@material/react-material-icon';
import restaurante from '../../assets/restaurante-fake.png';
import { Card, RestaurantCard } from '../../components';

const Home = () => {
    const [inputValue, setInputValue] = useState('');
    const settings = {
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 4,
        adaptiveHeight: true
    };
    return (
        <Wrapper>
            <Container>
                <Search>
                    <Logo src={logo} alt="logo da empresa" />
                    <TextField
                        trailingIcon={<MaterialIcon role="button" />}>
                        <Input
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)} />
                    </TextField>
                    <CarouselTitle>Na sua Área</CarouselTitle>
                    <Carousel {...settings}>
                        <Card photo={restaurante} title='nome sei la' />
                        <Card photo={restaurante} title='nome sei la' />
                        <Card photo={restaurante} title='nome sei la' />
                        <Card photo={restaurante} title='nome sei la' />
                        <Card photo={restaurante} title='nome sei la' />
                        <Card photo={restaurante} title='nome sei la' />
                        <Card photo={restaurante} title='nome sei la' />
                    </Carousel>
                </Search>
                <RestaurantCard />
            </Container>
            <Map />
        </Wrapper>
    );
};

export default Home;