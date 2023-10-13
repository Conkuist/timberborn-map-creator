import { World } from "./World.js";
import { WaterSource } from "./Entities/WaterSource.js"
import { Barrier } from "./Entities/Barrier.js";
import { Slope } from "./Entities/Slope.js";

let world = new World();

let water_source = new WaterSource(4,5,0,1,1);
let barrier = new Barrier(4,5,3,"Cw270");
let slope = new Slope(5,7,2,true,1)

world.addEntity(water_source);
world.addEntity(barrier);
world.addEntity(slope);

const pre = document.querySelector("#code");

pre.textContent = JSON.stringify(world,null,2)