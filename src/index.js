import setUpProxy from "./setupProxy";
import express from 'express';


const app = express();

setUpProxy(app);