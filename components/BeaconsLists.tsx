'use client';

import React from 'react';
import { Beacon } from '@/components/types';

interface BeaconsListProps {
    initialBeacons: Beacon[];
    onSelectBeacon: (beacon: Beacon) => void;
    selectedBeacon: Beacon | null;
}

const BeaconsList: React.FC<BeaconsListProps> = ({ initialBeacons, onSelectBeacon, selectedBeacon }) => {
    return (
        // Aumentamos el ancho del contenedor usando `md:w-1/3` para ocupar un tercio del ancho en pantallas medianas y mayores.
        <div className="w-full md:w-1/3 p-4 bg-white shadow-lg rounded-lg flex flex-col h-full">
            <ul className="scrollable-list overflow-y-auto h-full space-y-2">
                {initialBeacons.map((beacon) => (
                    <li
                        key={beacon._id}
                        className={`p-3 rounded-lg shadow-sm cursor-pointer ${selectedBeacon && selectedBeacon._id === beacon._id ? 'bg-blue-100' : 'bg-gray-100'
                            }`}
                        onClick={() => onSelectBeacon(beacon)}
                    >
                        <div className="grid grid-cols-2 gap-x-2 gap-y-1">
                            {/* Aseguramos que el texto no se corte usando `whitespace-nowrap` */}
                            <div className="col-span-2 text-sm font-bold whitespace-nowrap overflow-hidden text-ellipsis">
                                Device: {beacon.device || 'N/A'}
                            </div>
                            <div className="text-sm text-gray-700 font-semibold">Device Type:</div>
                            <div className="text-sm text-gray-700">{beacon.device_type || 'N/A'}</div>
                            <div className="text-sm text-gray-700 font-semibold">Model:</div>
                            <div className="text-sm text-gray-700">{beacon.device_model || 'N/A'}</div>
                            <div className="text-sm text-gray-700 font-semibold">Longitude:</div>
                            <div className="text-sm text-gray-700">{beacon.longitude.toFixed(6)}</div>
                            <div className="text-sm text-gray-700 font-semibold">Latitude:</div>
                            <div className="text-sm text-gray-700">{beacon.latitude.toFixed(6)}</div>
                            <div className="text-sm text-gray-700 font-semibold">Trigger:</div>
                            <div className="text-sm text-gray-700">{beacon.trigger || 'N/A'}</div>
                            <div className="text-sm text-gray-700 font-semibold">Timestamp:</div>
                            <div className="text-sm text-gray-700">
                                {/* Verificamos si el timestamp es válido antes de convertirlo a fecha */}
                                {Number.isFinite(beacon.timestamp)
                                    ? new Date(beacon.timestamp * 1000).toLocaleString()
                                    : 'Invalid Date'}
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default BeaconsList;
