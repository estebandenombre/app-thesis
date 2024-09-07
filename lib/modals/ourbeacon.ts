import { Schema, model, models } from "mongoose";

// Definir el esquema para almacenar los datos de la ubicación
const OurbeaconSchema = new Schema(
    {
        name: { type: "string", required: true },
        uuid: { type: "string", required: true },
        locationid: { type: "string", required: true },
        zone: { type: "string", required: true },

    },
    {
        timestamps: true // Esto agregará createdAt y updatedAt automáticamente
    }
);

// Crear el modelo basado en el esquema
const Ourbeacon = models.Ourbeacon || model("Ourbeacon", OurbeaconSchema);

export default Ourbeacon;
