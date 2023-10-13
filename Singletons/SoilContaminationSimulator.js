import { ContaminationCandidates } from "./Maps/ContaminationCandidates.js";
import { ContaminationLevels } from "./Maps/ContaminationLevels.js";

export class SoilContaminationSimulator {

    constructor(x, y) {

        this.ContaminationCandidates = new ContaminationCandidates(x, y);
        this.ContaminationLevels = new ContaminationLevels(x,y);
    }
}