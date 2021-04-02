import dotenv from 'dotenv';
dotenv.config();

const config = {
    mongoURI: process.env.MONGO_URI,
    port: process.env.PORT,
    evn: process.env.NODE_ENV
}

export default config ;