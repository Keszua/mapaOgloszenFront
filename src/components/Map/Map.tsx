import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet'
import './Map.css';
import 'leaflet/dist/leaflet.css';
import '../../utils/fix-map-icon';

export const Map = () => {
    return (
        <div className="map">
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