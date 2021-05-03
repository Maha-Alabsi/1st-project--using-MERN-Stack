import dotenv from 'dotenv';
dotenv.config();

const config = {
  mongoURI: process.env.MONGO_URL,
  port: process.env.PORT,
  env: process.env.NODE_ENV,
};

export default config;
