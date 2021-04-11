import winston from 'winston';
const { format } = winston;

const logger = winston.createLogger({
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
    new winston.transports.Console({
      level: 'info',
      format: format.combine(format.simple())
    }),
    new winston.transports.Console({
      level: 'error',
      format: format.combine(format.simple())
    })
  ],
});

export default logger;
