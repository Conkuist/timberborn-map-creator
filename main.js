import { World } from "./World.js";
import { WaterSource } from "./Entities/WaterSource.js"
import { Barrier } from "./Entities/Barrier.js";
import { Slope } from "./Entities/Slope.js";
import { Pine } from "./Entities/Pine.js";
import { Oak } from "./Entities/Oak.js";
import { Birch } from "./Entities/Birch.js";
import { BlueberryBush } from "./Entities/BlueberryBush.js";

import { displayMap } from "./display.js";

let world = new World();

let water_source = new WaterSource(4,5,0,1,1);
let barrier = new Barrier(4,5,3,"Cw270");
let slope = new Slope(5,7,2,true,1);
let pine = new Pine(4,3,2);
let oak = new Oak(4,3,2);
let birch = new Birch(4,3,2);
let bush = new BlueberryBush(4,3,2);

world.addEntity(water_source);
world.addEntity(barrier);
world.addEntity(slope);
world.addEntity(pine);
world.addEntity(oak);
world.addEntity(birch);
world.addEntity(bush);

const pre = document.querySelector("#code");

pre.textContent = JSON.stringify(world,null,2);

displayMap(16,16,100);