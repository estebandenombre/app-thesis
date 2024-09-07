// types.ts o interfaces.ts

// components/types.ts

export interface Beacon {
    _id: string;
    id: string;
    device: string;
    device_type: string;
    device_model: string;
    timestamp: number;
    longitude: number;
    latitude: number;
    trigger: string;
    createdAt: string;
    updatedAt: string;
}

export interface OurBeacon extends Beacon { }




