import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { FiPlus, FiArrowRight } from 'react-icons/fi'
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'

import mapMarkerImg from '../images/map-marker.svg'

import "leaflet/dist/leaflet.css"
import "../styles/pages/orphanages-map.css"
import mapIcon from '../utils/mapIcon'
import api from '../services/api'

interface Orphanage {
  id: number,
  latitude: number,
  longitude: number,
  name: string
}

function OrphanagesMap() {
  const [orphanages, setOrphanages] = useState<Orphanage[]>([])
  useEffect(() => {
    api.get('orphanages').then(res => {
      setOrphanages(res.data)
    })
  }, [])
  return (
    <div id="page-map">
      <aside>
        <header>
          <img src={mapMarkerImg} alt="Happy" />
          <h2>Escolha um orfanato no mapa</h2>
          <p>{`Muitas crianças estão esperando a sua visita :)`}</p>
        </header>
        <footer>
          <strong>Minas Gerais</strong>
          <span>Santa Luzia</span>
        </footer>
      </aside>
      <Map
        center={[-19.7827589, -43.8885246]}
        zoom={14}
        style={{ width: '100%', height: '100%' }}
      >
        {/*<TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" /> */}
        <TileLayer url={`https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`} />
        {
          orphanages.map(orphanage => {
            return (
              <Marker
                icon={mapIcon}
                position={[orphanage.latitude, orphanage.longitude]}
                key={orphanage.id}
              >
                <Popup
                  closeButton={false}
                  minWidth={240}
                  maxWidth={240}
                  className="map-popup"
                >
                  {orphanage.name}
                  <Link to={`/orphanages/${orphanage.id}`}>
                    <FiArrowRight size={20} color="#FFF" />
                  </Link>
                </Popup>
              </Marker>
            )
          })
        }
      </Map>
      <Link to="/orphanages/create" className="create-orphanege">
        <FiPlus size={32} color="#FFF" />
      </Link>
    </div>
  )
}

export default OrphanagesMap