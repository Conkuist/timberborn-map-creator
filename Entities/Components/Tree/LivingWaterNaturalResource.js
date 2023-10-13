export class LivingWaterNaturalResource {

    constructor(dying_progress = 0, death_by_flooding = false) {

        this.DyingProgress = dying_progress.toFixed(1);
        this.DeathByFlooding = death_by_flooding;
    }
}