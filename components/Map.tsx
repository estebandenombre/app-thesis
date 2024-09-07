'use client';

import React from 'react';
import { Beacon } from '@/components/types';

interface SimpleMapProps {
    beacon: Beacon;
}

const SimpleMap: React.FC<SimpleMapProps> = ({ beacon }) => {
    const mapUrl = `https://www.google.com/maps?q=${beacon.latitude},${beacon.longitude}&z=15&output=embed`;

    return (
        <div className="relative flex flex-col h-full">
            <iframe
                width="100%"
                height="100%"
                src={mapUrl}
                style={{
                    border: 0,
                    margin: 0,
                    padding: 0,
                    display: 'block'
                }}
                allowFullScreen={false}
                loading="lazy"
            />
        </div>
    );
};

export default SimpleMap;
