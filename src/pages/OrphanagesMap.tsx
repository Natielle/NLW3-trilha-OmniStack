import React from 'react';
import { Link } from 'react-router-dom'
import { FiPlus } from 'react-icons/fi';
import { Map, TileLayer } from 'react-leaflet'

import mapMaker from '../images/map-maker.svg'
import '../styles/pages/orphanage-map.css';
import 'leaflet/dist/leaflet.css'

function OrphanagesMap() {
  return (
    <div id="page-map">
      <aside>
        <header>
          <img src={mapMaker} alt="Happy"/>
          <h2>Escolha um orfanato no mapa</h2>
          <p>Muitas crianças estão esperando a sua visita :D</p>
        </header>

        <footer>
          <strong>Salto</strong>
          <span>São Paulo</span>
        </footer>
      </aside>

      <Map
        center={[-23.2036955,-47.2892851]}
        zoom={14.25}
        style={{ width:'100%', height: '100%'}}
      >
        {/* Mapa do openstreetmap */}
        <TileLayer url="https:a.tile.openstreetmap.org/{z}/{x}/{y}.png"/>


        {/* Mapa do mapbox no tema light (TEM QUE CADASTRAR PARA USAR) */}
        {/* <TileLayer 
          url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?acess_token=${process.env.REACT_APP_MAPBOX_TOKEN}`} 
        /> */}
        
        {/* Mapa do mapbox no tema dark (TEM QUE CADASTRAR PARA USAR) */}
        {/* <TileLayer 
          url={`https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/256/{z}/{x}/{y}@2x?acess_token=${process.env.REACT_APP_MAPBOX_TOKEN}`} 
        /> */}
      </Map>

      <Link to="" className="create-orphanage">
        <FiPlus size={32} color="#FFF" />
      </Link>

    </div>
  );
}

export default OrphanagesMap;