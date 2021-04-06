import winston from 'winston';
const { format } = winston;

const logger = winston.createLogger({
  format: winston.format.json(),
  defaultMeta: { service: 'user-service' },
  transports: [
    new winston.transports.File({
      filename: 'info.log',
      level: 'info',
      format: format.combine(format.timestamp(), format.json()),
    }),
    new winston.transports.File({
      filename: 'error.log',
      level: 'error',
      format: format.combine(format.timestamp(), format.json()),
    }),
  ],
});

export default logger;
