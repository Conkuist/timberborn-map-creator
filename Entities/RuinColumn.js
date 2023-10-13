import { Entity } from "./Entity.js";
import { BlockObject } from "./Components/BlockObject.js";
import { DryObject } from "./Components/Tree/DryObject.js";
import { YielderRuin } from "./Components/YielderRuin.js";
import { RuinModels } from "./Components/RuinModels.js";

export class RuinColumn extends Entity {

    constructor(x, y, z, height = 1, model) {

        // height 1 - 8

        if(isNaN(height))
        {
            height = 1;
        }

        if(height > 8)
        {
            height = 8;
        }

        if(height < 1)
        {
            height = 1;
        }

        super(`RuinColumnH${height}`);

        this.Components.BlockObject = new BlockObject(x,y,z)
        this.Components.RuinModels = new RuinModels(model);
        this.Components.DryObject = new DryObject(true);
        this.Components["Yielder:Ruin"] = new YielderRuin(height);
    }
}