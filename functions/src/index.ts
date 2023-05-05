import * as functions from "firebase-functions";
import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';
import cors from "cors"
import bodyParser from "body-parser"
import { ApolloServerPluginDrainHttpServer } from '@apollo/server/plugin/drainHttpServer';
import http from 'http';
import express from 'express'
import { typeDefs } from './Schema.js';
import resolvers from './resolvers/index.js';
import db from './db.js';
import dotenv from "dotenv"
import models from './models/index.js';
import jwt from "jsonwebtoken"

dotenv.config()

const DB_HOST:string|undefined = "mongodb+srv://chim:LHmiovshmK6HPYlo@cluster0.zefme.mongodb.net/?retryWrites=true&w=majority"
const JWT_SECRETE:any = "edaprojectformybrother"


// Required logic for integrating with Express
const app = express();

// Our httpServer handles incoming requests to our Express app.
// Below, we tell Apollo Server to "drain" this httpServer,
// enabling our servers to shut down gracefully.
const httpServer:any = http.createServer(app);

// Same ApolloServer initialization as before, plus the drain plugin
// for our httpServer.
const server = new ApolloServer({
    typeDefs,
    resolvers,
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
  });
  // Ensure we wait for our server to start
  await server.start();

db.connect(DB_HOST)

// Set up our Express middleware to handle CORS, body parsing,
// and our expressMiddleware function.
app.use(
    '/api',
    cors<cors.CorsRequest>({origin: true}),
    bodyParser.json(),
    // expressMiddleware accepts the same arguments:
    // an Apollo Server instance and optional configuration options
    expressMiddleware(server, {
      context: async ({ req }) => { 
        const token = req.headers.authorization
        //try to retrieve the user  with the token
        const user:any = getUser(token)
        
        return { models, user}
     },
    }),
  );


  //get the user info fromJWT
  // eslint-disable-next-line no-unused-vars
    const getUser = (token:any)  =>{
        if(token){
            try{
                //return the user information from the token
                return jwt.verify(token, JWT_SECRETE)
            }catch(err){
                //uf there's a problem with the token, throw am error
                throw new Error('Session invalid')
            }
        }else{
            return null
        }
      }

export const App = functions.https.onRequest(app)