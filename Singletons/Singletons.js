import { MapSize } from "./MapSize.js"
import { TerrainMap } from "./TerrainMap.js"
import { WaterMap } from "./WaterMap.js";
import { ContaminationMap } from "./ContaminationMap.js";
import { SoilMoistureSimulator } from "./SoilMoistureSimulator.js";
import { SoilContaminationSimulator } from "./SoilContaminationSimulator.js";
import { MapThumbnailCameraMover } from "./MapThumbnailCameraMover.js";

export class Singletons {

    constructor(x, y) {

        this.MapSize = new MapSize(x, y);
        this.TerrainMap = new TerrainMap(x, y);
        this.WaterMap = new WaterMap(x, y);
        this.ContaminationMap = new ContaminationMap(x, y);
        this.SoilMoistureSimulator = new SoilMoistureSimulator(x,y);
        this.SoilContaminationSimulator = new SoilContaminationSimulator(x, y);
        this.MapThumbnailCameraMover = new MapThumbnailCameraMover(x, y);
    }
}