import { useEffect, useRef } from "react";

const HereMap = () => {
  const mapRef = useRef(null);

  useEffect(() => {
    if (!window.H) {
      console.error("HERE Maps API not loaded");
      return;
    }

    // Set up HERE Maps Platform
    const platform = new window.H.service.Platform({
      apikey: "sZgpUNZS-VVZSCc41cf3bUTRqbuXr1d9ytSx4QL8Wnk", // 🔥 Replace with your HERE API Key
    });

    const defaultLayers = platform.createDefaultLayers();

    // Initialize the map
    const map = new window.H.Map(
      mapRef.current,
      defaultLayers.vector.normal.map,
      {
        center: { lat: 19.241, lng: 72.8472 },
        zoom: 12,
      }
    );

    // Enable map interactions
    const behavior = new window.H.mapevents.Behavior(
      new window.H.mapevents.MapEvents(map)
    );

    // Add UI controls
    const ui = window.H.ui.UI.createDefault(map, defaultLayers);

    return () => map.dispose(); // Cleanup on component unmount
  }, []);

  return <div ref={mapRef} className="w-full h-[600px] rounded-lg shadow-lg" />;
};

export default HereMap;
