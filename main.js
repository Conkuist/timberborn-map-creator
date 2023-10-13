import { World } from "./World.js";
import { WaterSource } from "./Entities/WaterSource.js"
import { Barrier } from "./Entities/Barrier.js";
import { Slope } from "./Entities/Slope.js";
import { Pine } from "./Entities/Pine.js";
import { Oak } from "./Entities/Oak.js";
import { Birch } from "./Entities/Birch.js";
import { BlueberryBush } from "./Entities/BlueberryBush.js";
import { StartingLocation } from "./Entities/StartingLocation.js";
import { RuinColumn } from "./Entities/RuinColumn.js";

import { displayMap } from "./display.js";

let world = new World();

let water_source = new WaterSource(4,5,8,1,1);
let barrier = new Barrier(4,5,8,"Cw270");
let slope = new Slope(5,7,8,true,1);
let pine = new Pine(4,3,8);
let oak = new Oak(4,5,8);
let birch = new Birch(4,3,8);
let bush = new BlueberryBush(4,3,8);
let start = new StartingLocation(10,10,8);
let ruin = new RuinColumn(16,16,8,8,"E");
/*
world.addEntity(water_source);
world.addEntity(barrier);
world.addEntity(slope);
world.addEntity(pine);
world.addEntity(oak);
world.addEntity(birch);
world.addEntity(bush);
*/
world.addEntity(ruin);
world.addEntity(start);
const pre = document.querySelector("#code");

pre.textContent = JSON.stringify(world,null,2);

displayMap(16,16,100);