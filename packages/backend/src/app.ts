import cookieParser from 'cookie-parser';
import express from 'express';
import path from 'path';
import { DEFAULT_PORT } from './config/defaults';
import connectToMongo from './services/connectToMongo';
import startApollo from './services/startApollo';

if (process.env.NODE_ENV === 'development') {
  require('dotenv').config();
}

const expressApp = express();

expressApp.use(cookieParser());
expressApp.use(express.urlencoded({ extended: true }));
expressApp.use(express.json());
expressApp.use('/static', express.static(path.join(__dirname, 'public')));

const port = (process.env.PORT && parseInt(process.env.PORT)) || DEFAULT_PORT;

const startTheApp = async () => {
  const connection = await connectToMongo();
  const { apolloServer } = await startApollo(expressApp);
  expressApp.listen(port, () => console.info(`Express Server ready at http://localhost:${port}`));

  console.log(`Apollo Server ready at http://localhost:${port}${apolloServer.graphqlPath}`);
};

startTheApp();

// export default startTheApp
