export class NaturalResourceModelRandomizer {

    constructor(rotation = 0, diameter_scale = 1, height_scale = 1) {
        
        this.Rotation = rotation.toFixed(1);
        this.DiameterScale = diameter_scale.toFixed(1);
        this.HeightScale = height_scale.toFixed(1);
    }
}