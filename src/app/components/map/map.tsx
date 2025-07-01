'use client';
import { MapContainer } from 'react-leaflet';
import { TileLayer } from 'react-leaflet';
import { Marker } from 'react-leaflet';
import './map.css';
import { useState, useEffect } from 'react';
import 'leaflet/dist/leaflet.css';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css';
import "leaflet-defaulticon-compatibility";

export default function LocationMap() {

    const [renderContent, setRenderContent] = useState(false);

    useEffect(() => {
        if(typeof window !== 'undefined') {
            setRenderContent(true);
        }
    }, [])

    if(!renderContent) {
        return null;
    }

    return(
        <MapContainer center={[50.0619, 19.9368]} zoom={15} scrollWheelZoom={false} zoomControl={false}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[50.0619, 19.9368]}>
                
            </Marker>
        </MapContainer>
    )
}