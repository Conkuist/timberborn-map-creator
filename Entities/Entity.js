import { UUID } from "./UUID.js";

export class Entity {

    constructor (template) {

        this.Id = UUID();
        this.Template = template;
        this.Components = {};
    }
}