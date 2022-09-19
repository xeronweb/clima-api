import "reflect-metadata";
import { registerDependecies } from "./utils/registerDependecies";
registerDependecies();
import dotenv from 'dotenv';
import { App } from './App';

dotenv.config();

const app = new App();
app.listen();