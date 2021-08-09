import React, { useState } from 'react';
import logo from '../../assets/logo.svg';
import { useSelector } from 'react-redux';
import { Container, Search, Logo, Wrapper, CarouselTitle, Carousel, ModalTitle, ModalContent } from './styled';
import TextField, { Input } from '@material/react-text-field';
import MaterialIcon from '@material/react-material-icon';
import restaurante from '../../assets/restaurante-fake.png';
import { Card, RestaurantCard, Modal, Map, Loader } from '../../components';

const Home = () => {
    const [inputValue, setInputValue] = useState('');
    const [query, setQuery] = useState(null);
    const [placeId, setPlaceId] = useState(null);
    const [modalOpened, setModalOpened] = useState(false);
    const [restaurants, restaurantSelected] = useSelector((state) => state.restaurants)
    const settings = {
        dots: false,
        infinite: true,
        autoplay: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 4,
        adaptiveHeight: true
    };

    function handleKeyPress(e) {
        if (e.key === 'Enter') {
            setQuery(inputValue);
        }
    }

    function handleOpenModal(placeId) {
        setPlaceId(placeId);
        setModalOpened(true);
    }

    return (
        <Wrapper>
            <Container>
                <Search>
                    <Logo src={logo} alt="logo da empresa" />
                    <TextField
                        {restaurants.lenght > 0 ? (
                            <>
                                <CarouselTitle>Na sua Área</CarouselTitle>
                                <Carousel {...settings}>
                                    {restaurants.map((restaurant) => (
                                        <Card
                                            photo={restaurant.photos ? restaurant.photos[0].getUrl() : restaurante}
                                            title={restaurante.name} />
                                    ))}
                                </Carousel>
                            </>
                        ) : (<Loader />
                        )}
                        trailingIcon={<MaterialIcon role="button" />}>
                        <Input
                            value={inputValue}
                            onKeyPress={handleKeyPress}
                            onChange={(e) => setInputValue(e.target.value)} />
                    </TextField>
                </Search>
                {restaurants.map((restaurant) =>
                    <RestaurantCard onClick={() => handleOpenModal(restaurant.place_id)} restaurant={restaurant} />
                )}
            </Container>
            <Map query={query} />
            <Modal open={modalOpened} onClose={() => setModalOpened(!modalOpened)} >
                <ModalTitle>{restaurantSelected?.name}</ModalTitle>
                <ModalContent>{restaurantSelected?.formatted_phone_number}</ModalContent>
                <ModalContent>{restaurantSelected?.formatted_address}</ModalContent>
                <ModalContent>{restaurantSelected?.opening_hours?.open_now ? 'Aberto Agora' : 'Fechado neste momento'}</ModalContent>
            </Modal>
        </Wrapper>
    );
};

export default Home;