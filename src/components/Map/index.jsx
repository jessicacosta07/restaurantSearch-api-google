import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GoogleApiWrapper, Map, Marker } from 'google-maps-react';
import { setRestaurants, setRestaurant } from '../../redux/modules/restaurants';

export const MapContainer = (props) => {
    const dispatch = useDispatch();
    const { restaurants } = useSelector((state) => state.restaurants);
    const [map, setMap] = useState(null);
    const { google, query, placeId } = props;

    useEffect(() => {
        if (query) {
            searchByQuery(query);
        }
    }, [query]);

    useEffect(() => {
        if (place) {
            getRestaurantById(placeId);
        }
    }, [place]);

    function getRestaurantById(placeId) {
        const service = new google.maps.places.PlacesService(map);
        const request = {
            placeId,
            fields: ['name', 'opening_hours', 'formatted_address', 'formatted_phone_number'],
        };
        service.getDetails(request, (place, status) => {
            if (status === google.maps.places.PlacesServiceStatus.OK) {
                dispatch(setRestaurants(place));
            }
        });
    }

    function searchByQuery(query) {
        const service = new google.maps.places.PlacesService(map);
        const request = {
            location: map.center,
            radius: '200',
            type: ['restaurant'],
            query,
        };
        service.textSearch(request, (results, status) => {
            if (status === google.maps.places.PlacesServiceStatus.OK) {
                dispatch(setRestaurants(results));
            }
        });
    }

    function searchNearby(map, center) {
        const service = new google.maps.places.PlacesService(map);
        const request = {
            location: center,
            radius: '20000',
            type: ['restaurant'],
        };
        service.nearbySearch(request, (results, status) => {
            if (status === google.maps.places.PlacesServiceStatus.OK) {
                dispatch(setRestaurants(results));
            }
        });
    }

    function onMapReady(_, map) {
        setMap(map);
        searchNearby(map, map.center);
    }

    return <Map
        google={google}
        centerAroundCurrentLocation
        onReady={onMapReady}
        onReadyCenter={onMapReady}
        {...props}>
        {restaurants.map((restaurants) => (
            <Marker key={restaurant.place_id} name={restaurant.name} position={{
                lat: restaurante.geometry.location.lat(),
                lng: restaurante.geometry.location.lng(),

            }}
            />
        ))}
    </Map>
};

export default GoogleApiWrapper({
    apiKey: process.env.REACT_API_GOOGLE_API_KEY,
    language: 'pt-BR',
})(MapContainer);