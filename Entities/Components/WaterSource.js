export class WaterSourceComponent {
    
    constructor(SpecifiedStrength = 1, CurrentStrength = 1) {

        this.SpecifiedStrength = SpecifiedStrength.toFixed(1);
        this.CurrentStrength = CurrentStrength.toFixed(1);
    }
}