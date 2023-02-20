import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet'
import './Map.css';
import 'leaflet/dist/leaflet.css';
import '../../utils/fix-map-icon';
import { useContext, useEffect } from 'react';
import { SearchContext } from '../contexts/search.context';

export const Map = () => {
    const {search} = useContext(SearchContext);

    useEffect( () => {
        console.log('Make request');
    },[search]);

    return (
        <div className="map">
            <h1>
                Search for: {search}
            </h1>
            <MapContainer center={[51.4097, 21.1301]} zoom={18} scrollWheelZoom={false}> 
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"           
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
                <Marker position={[51.4099, 21.1301]} >
                    <Popup>
                        Twoja pozycja
                    </Popup>
                </Marker>    
            </MapContainer>
        </div>
    );
};