'use client';

import React, { useEffect, useState } from 'react';
import Header from '@/components/Header';
import SimpleMap from '@/components/Map';
import BeaconsList from '@/components/BeaconsLists';
import SkeletonLoaderMap from '@/components/SkeletonLoaderMap';
import SkeletonLoaderBeacons from '@/components/SkeletonLoaderBeacons';
import { Beacon } from '@/components/types';

export default function Home() {
  const [beacons, setBeacons] = useState<Beacon[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedBeacon, setSelectedBeacon] = useState<Beacon | null>(null);

  useEffect(() => {
    const fetchBeacons = async () => {
      try {
        const res = await fetch('/api/locations');
        if (!res.ok) {
          throw new Error('Error al obtener los datos de la API');
        }

        const jsonData = await res.json();

        // Mapear directamente al tipo `Beacon`
        const locations: Beacon[] = jsonData.data.map((loc: any) => ({
          _id: loc._id,
          id: loc.id,
          device: loc.device,
          device_type: loc.device_type,
          device_model: loc.device_model,
          timestamp: loc.timestamp,
          longitude: loc.longitude,
          latitude: loc.latitude,
          trigger: loc.trigger,
          createdAt: loc.createdAt,
          updatedAt: loc.updatedAt
        }));

        if (locations.length > 0) {
          setBeacons(locations);
          setSelectedBeacon(locations[0]); // Selecciona el primer beacon de la lista
        } else {
          setError('No se encontraron beacons.');
        }
      } catch (error) {
        console.error('Error al obtener el beacon:', error);
        setError('Error al cargar la ubicación del beacon.');
      } finally {
        setLoading(false);
      }
    };

    fetchBeacons();
  }, []);

  return (
    <div className="flex flex-col h-screen">
      <Header />
      <main className="flex flex-grow overflow-hidden">
        {error ? (
          <p>{error}</p>
        ) : (
          <>
            <div className="flex-grow h-full">
              {loading ? (
                <SkeletonLoaderMap />
              ) : (
                <SimpleMap beacon={selectedBeacon!} />
              )}
            </div>
            <BeaconsList
              initialBeacons={beacons}
              onSelectBeacon={setSelectedBeacon}
              selectedBeacon={selectedBeacon}
            />
          </>
        )}
      </main>
    </div>
  );
}
