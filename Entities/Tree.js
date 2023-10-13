import { Entity } from "./Entity.js";
import { BlockObject } from "./Components/BlockObject.js";
import { Growable } from "./Components/Tree/Growable.js";
import { NaturalResourceModelRandomizer } from "./Components/Tree/NaturalResourceModelRandomizer.js";
import { CoordinatesOffseter } from "./Components/Tree/CoordinatesOffseter.js";
import { LivingNaturalResource } from "./Components/Tree/LivingNaturalResource.js";
import { ContaminatedNaturalResource } from "./Components/Tree/ContaminatedNaturalResource.js";
import { YielderCuttable } from "./Components/Tree/YielderCuttable.js";
import { DryObject } from "./Components/Tree/DryObject.js";
import { WateredNaturalResource } from "./Components/Tree/WateredNaturalResource.js";
import { GatherableYieldGrower } from "./Components/Tree/GatherableYieldGrower.js";
import { YielderGatherable } from "./Components/Tree/YielderGatherable.js";
import { ContaminatedObject } from "./Components/Tree/ContaminatedObject.js";
import { LivingWaterNaturalResource } from "./Components/Tree/LivingWaterNaturalResource.js";

export class Tree extends Entity {

    constructor(tree, x, y, z) {

        super(tree);
        this.Components.BlockObject = new BlockObject(x, y, z);
        this.Components.Growable = new Growable();
        this.NaturalResourceModelRandomizer = new NaturalResourceModelRandomizer();
        this.CoordinatesOffseter = new CoordinatesOffseter();
        this.LivingNaturalResource = new LivingNaturalResource();
        this.ContaminatedNaturalResource = new ContaminatedNaturalResource();
        this.YielderCuttable = new YielderCuttable();
        this.DryObject = new DryObject();
        this.WateredNaturalResource = new WateredNaturalResource();
        this.GatherableYieldGrower = new GatherableYieldGrower();
        this.YielderGatherable = new YielderGatherable();
        this.ContaminatedObject = new ContaminatedObject();
        this.LivingWaterNaturalResource = new LivingWaterNaturalResource();
    }
}
