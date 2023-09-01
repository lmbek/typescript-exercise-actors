import './style.scss'
import {Wireframe} from "./Wireframe.ts";
import DOM from "../src/wireframe/DOM.json";
import data from "../data/actors.json";
import {ShowActor} from "./actors/ShowActor.ts";

( ()=>{
    new Wireframe(DOM.html);
    new ShowActor(data.content);
    return
} )();