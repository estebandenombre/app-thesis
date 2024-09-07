import { Schema, model, models } from "mongoose";

// Definir el esquema para almacenar los datos de la ubicación
const LocationSchema = new Schema(
    {
        id: { type: "string", required: true },
        device: { type: "string", required: true },
        device_type: { type: "string", required: true },
        device_model: { type: "string", required: true },
        timestamp: { type: "number", required: true }, // Almacenar como número para facilitar las operaciones de tiempo
        longitude: { type: "number", required: true }, // Coordenadas deben ser números
        latitude: { type: "number", required: true },  // Coordenadas deben ser números
        trigger: { type: "string", required: true }
    },
    {
        timestamps: true // Esto agregará createdAt y updatedAt automáticamente
    }
);

// Crear el modelo basado en el esquema
const Location = models.Location || model("Location", LocationSchema);

export default Location;
