import {app} from "./app";
import { testeInicial } from "./endpoints/testeInicial";

app.get("/", testeInicial)