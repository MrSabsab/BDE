import React, { useState } from 'react';
import { ComposableMap, Geographies, Geography, Marker } from 'react-simple-maps';
import { motion } from 'framer-motion';
import { Tooltip } from 'react-tooltip';
import { Search, MapPin } from 'lucide-react';

const geoUrl = "https://raw.githubusercontent.com/gregoiredavid/france-geojson/master/regions.geojson";

const associations = [
  { id: 1, name: "BDE Sorbonne", type: "BDE", coordinates: [2.3522, 48.8566], city: "Paris" },
  { id: 2, name: "BDS Lyon 3", type: "BDS", coordinates: [4.8357, 45.7640], city: "Lyon" },
  { id: 3, name: "BDA Bordeaux", type: "BDA", coordinates: [-0.5792, 44.8378], city: "Bordeaux" },
  { id: 4, name: "BDE Strasbourg", type: "BDE", coordinates: [7.7521, 48.5734], city: "Strasbourg" },
  { id: 5, name: "BDS Toulouse", type: "BDS", coordinates: [1.4442, 43.6047], city: "Toulouse" },
  { id: 6, name: "BDA Lille", type: "BDA", coordinates: [3.0573, 50.6292], city: "Lille" },
  { id: 7, name: "BDE Nantes", type: "BDE", coordinates: [-1.5534, 47.2184], city: "Nantes" },
  { id: 8, name: "BDS Marseille", type: "BDS", coordinates: [5.3698, 43.2965], city: "Marseille" }
];

const FranceMap: React.FC = () => {
  const [selectedRegion, setSelectedRegion] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="bg-white rounded-xl shadow-lg p-4">
      <div className="mb-4">
        <div className="relative">
          <input
            type="text"
            placeholder="Rechercher une association..."
            className="input-field pl-10 pr-4 py-2 w-full text-sm"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
        </div>
      </div>

      <div className="relative" style={{ width: '100%', maxWidth: '800px', margin: '0 auto' }}>
        <ComposableMap
          projection="geoMercator"
          projectionConfig={{
            scale: 2800,
            center: [2.5, 46.5]
          }}
          width={800}
          height={800}
        >
          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies.map((geo) => (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  onMouseEnter={() => setSelectedRegion(geo.properties.nom)}
                  onMouseLeave={() => setSelectedRegion("")}
                  style={{
                    default: {
                      fill: "#e2e8f0",
                      stroke: "#fff",
                      strokeWidth: 0.5,
                      outline: "none",
                    },
                    hover: {
                      fill: "#bfdbfe",
                      stroke: "#fff",
                      strokeWidth: 0.5,
                      outline: "none",
                    },
                  }}
                  data-tooltip-id="region-tooltip"
                  data-tooltip-content={geo.properties.nom}
                />
              ))
            }
          </Geographies>

          {associations.map(({ id, name, coordinates, type }) => (
            <Marker key={id} coordinates={coordinates}>
              <motion.g
                whileHover={{ scale: 1.2 }}
                className="cursor-pointer"
                data-tooltip-id="association-tooltip"
                data-tooltip-content={`${name} (${type})`}
              >
                <MapPin
                  size={20}
                  className={`
                    ${type === 'BDE' ? 'text-primary-600' : ''}
                    ${type === 'BDS' ? 'text-success-600' : ''}
                    ${type === 'BDA' ? 'text-secondary-600' : ''}
                  `}
                />
              </motion.g>
            </Marker>
          ))}
        </ComposableMap>

        <Tooltip id="region-tooltip" />
        <Tooltip id="association-tooltip" />
      </div>

      <div className="mt-4 grid grid-cols-3 gap-2 text-sm">
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 rounded-full bg-primary-600"></div>
          <span>BDE</span>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 rounded-full bg-success-600"></div>
          <span>BDS</span>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 rounded-full bg-secondary-600"></div>
          <span>BDA</span>
        </div>
      </div>
    </div>
  );
};

export default FranceMap;