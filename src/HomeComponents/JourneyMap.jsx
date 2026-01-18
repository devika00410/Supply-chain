import React, { useState } from "react";
import { ComposableMap, Geographies, Geography, Marker } from "react-simple-maps";
import testimonialData from "../Data/TestimonialData.json";

// Import logos
import microsoftLogo from "../assets/Logos/microsoft.png";
import appStoreLogo from "../assets/Logos/app-store.png";
import oracleLogo from "../assets/Logos/oracle.png";
import pinterestLogo from "../assets/Logos/pinterest.png";
import uberLogo from "../assets/Logos/uber.png";
import unityLogo from "../assets/Logos/unity.png";
import photosLogo from "../assets/Logos/photos.png";

// Map logo names
const logos = {
  "microsoft.png": microsoftLogo,
  "app-store.png": appStoreLogo,
  "oracle.png": oracleLogo,
  "pinterest.png": pinterestLogo,
  "uber.png": uberLogo,
  "unity.png": unityLogo,
  "photos.png": photosLogo,
};

const JourneyMap = () => {
  const [hoveredCity, setHoveredCity] = useState(null);
  const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

  return (
    <div style={{ width: "100%", height: "700px", position: "relative" }}>
      <ComposableMap
        projection="geoMercator"
        projectionConfig={{ center: [80, 20], scale: 900 }} 
      >
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map((geo) => (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                fill="#F3F4F6"
                stroke="#D1D5DB"
                style={{
                  default: { outline: "none" },
                  hover: { outline: "none", fill: "#E5E7EB" },
                  pressed: { outline: "none" },
                }}
              />
            ))
          }
        </Geographies>

        {testimonialData.testimonialData.map((city) => (
          <Marker key={city.id} coordinates={city.coordinates}>
            {/* Google Maps style icon with company logo */}
            <foreignObject x={-15} y={-40} width={40} height={40}>
              <div
                style={{
                  width: "30px",
                  height: "30px",
                  borderRadius: "50%",
                  overflow: "hidden",
                  border: "2px solid #2563eb",
                  background: "#fff",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  cursor: "pointer",
                }}
                onMouseEnter={() => setHoveredCity(city)}
                onMouseLeave={() => setHoveredCity(null)}
              >
                <img
                  src={logos[city.logo]}
                  alt={city.company}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>
            </foreignObject>

            <text
              textAnchor="middle"
              y={20}
              style={{
                fontFamily: "system-ui",
                fill: "#111827",
                fontSize: "10px",
                fontWeight: "bold",
              }}
            >
              {city.city}
            </text>
          </Marker>
        ))}
      </ComposableMap>

      {/* Hovered city review */}
      {hoveredCity && (
        <div
          style={{
            position: "absolute",
            bottom: 20,
            left: "50%",
            transform: "translateX(-50%)",
            padding: "16px 20px",
            background: "#fff",
            color: "#111827",
            borderRadius: "12px",
            boxShadow: "0 6px 16px rgba(0,0,0,0.1)",
            fontSize: "14px",
            maxWidth: "380px",
            textAlign: "center",
            zIndex: 10,
          }}
        >
          <strong style={{ display: "block", fontSize: "16px", marginBottom: "4px", color: "#1e3a8a" }}>
            {hoveredCity.company}
          </strong>
          <em style={{ display: "block", fontSize: "12px", color: "#475569", marginBottom: "6px" }}>
            {hoveredCity.city}
          </em>
          <span style={{ fontSize: "13px", color: "#334155", display: "block", marginBottom: "6px" }}>
            "{hoveredCity.quote}"
          </span>
          <span style={{ fontSize: "13px", color: "#dc2626", display: "block", marginBottom: "4px",fontWeight:"bolder" }}>
            Before: {hoveredCity.beforeChallenge}
          </span>
          <span style={{ fontSize: "13px", color: "#16a34a", display: "block",fontWeight:"bolder" }}>
            After: {hoveredCity.afterSolution}
          </span>
        </div>
      )}
    </div>
  );
};

export default JourneyMap;
