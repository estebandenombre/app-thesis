import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

const connect = async () => {
    const connectionState = mongoose.connection.readyState;
    if (connectionState === 1) {
        console.log("Database is already connected");
        return;
    }

    if (connectionState == 2) {
        console.log("Database is connecting");
        return;
    }
    try {
        mongoose.connect(MONGODB_URI!, {
            dbName: 'next14-mongodb-restapi',
            bufferCommands: true
        });
        console.log("Connected");
    } catch (err: any) {
        console.log("Error: ", err);
        throw new Error("Error", err);
    }
};
export default connect;