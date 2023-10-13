export class RuinModels {

    constructor(variant_id = "A") {

        // variant_id A - E

        if(variant_id.match(/^[A-E]$/) === null) {

            // set variant_id to "A" if variant_id is not A - E

            variant_id = "A";
        }

        this.VariantId = variant_id;
    }
}