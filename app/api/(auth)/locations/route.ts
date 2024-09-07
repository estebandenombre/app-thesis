import connect from '@/lib/db';
import Location from '@/lib/modals/location';
import { error } from 'console';


import { NextResponse } from 'next/server';
import { use } from 'react';

export const GET = async (request: Request) => {
    try {
        // Connect to the database
        await connect();

        // Get query parameters from the URL
        const { searchParams } = new URL(request.url);
        const filters = Object.fromEntries(searchParams.entries());

        // Retrieve documents from the database based on query parameters
        const locations = await Location.find(filters).exec();

        // Respond with the retrieved data
        return NextResponse.json({
            message: "Data retrieved successfully",
            data: locations,
        }, { status: 200 });
    } catch (error: any) {
        console.error("Error retrieving data:", error.message);
        return NextResponse.json({ error: "Error retrieving data: " + error.message }, { status: 500 });
    }
};
export const POST = async (request: Request) => {
    try {
        // Conectar a la base de datos
        await connect();

        // Leer el cuerpo de la solicitud como texto
        const formData = await request.text();

        // Convertir los datos codificados en URL a un objeto
        const params = new URLSearchParams(formData);
        const data = Object.fromEntries(params.entries());

        // Crear un nuevo documento en la base de datos con los datos recibidos
        const newLocation = new Location({
            id: data.id,
            device: data.device,
            device_type: data.device_type,
            device_model: data.device_model,
            timestamp: Number(data.timestamp),
            longitude: Number(data.longitude),
            latitude: Number(data.latitude),
            trigger: data.trigger,
        });

        // Guardar el nuevo documento en la base de datos
        await newLocation.save();

        // Responder con éxito y con los datos guardados
        return new NextResponse(
            JSON.stringify({
                message: "Datos recibidos y guardados correctamente",
                data: newLocation,
            }),
            { status: 201 }
        );
    } catch (error: any) {
        console.error("Error al guardar los datos:", error.message);
        return new NextResponse("Error al guardar los datos: " + error.message, { status: 500 });
    }
};





