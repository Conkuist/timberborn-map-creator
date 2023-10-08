// function for Timestamp

Date.prototype.toTimestamp = function () {
    return  this.toISOString().split(".")[0].replace("T", " ");
}

// function for World

function World(x,y)
{
    this.GameVersion = "";
    this.Timestamp = "";
    this.Singletons = {};
    this.Entities = [];

    this.SetGameVersion = (g) => {
        
        this.GameVersion = g;
    }
    this.SetTimeStamp = (d) => {
        
        this.Timestamp = d.toTimestamp();
    }
    this.SetSingletons = (x,y) => {
        
        this.Singletons = new Singletons(x,y)
    }

    this.SetGameVersion("0.5.0.2-d3e4ac7-xsw");
    this.SetTimeStamp(new Date());
    this.SetSingletons(x,y);

}

// functions for Singletons

function Singletons(x,y)
{

    this.SetMapSize = (x,y) => {

        this.MapSize = new MapSize(x,y);
    }

    this.SetTerrainMap = (x,y) => {

        this.TerrainMap = new TerrainMap(x,y);
    }

    this.SetWaterMap = (x,y) => {

        this.WaterMap = new WaterMap(x,y);
    }

    this.SetContaminationMap = (x,y) => {

        this.ContaminationMap = new ContaminationMap(x,y);
    }

    this.SetSoilMoistureSimulator = (x,y) => {

        this.SoilMoistureSimulator = new SoilMoistureSimulator(x,y);
    }


    this.SetSoilContaminationSimulator = (x,y) => {

        this.SoilContaminationSimulator = new SoilContaminationSimulator(x,y);
    }
    
    this.SetMapThumbnailCameraMover = () => {

        this.MapThumbnailCameraMover = new MapThumbnailCameraMover();
    }

    this.SetMapSize(x,y);
    this.SetTerrainMap(x,y);
    this.SetWaterMap(x,y);
    this.SetContaminationMap(x,y);
    this.SetSoilMoistureSimulator(x,y);
    this.SetSoilContaminationSimulator(x,y);
    this.SetMapThumbnailCameraMover();
}

// functions for MapSize

function MapSize(x,y) {

    this.Size = new Size(x,y);
}

function Size(x,y) {

    this.X = x;
    this.Y = y;
}

// functions for TerrainMap

function TerrainMap(x,y) {

    this.Heights = new Heights(x,y);

}

function Heights(x,y) {

    this.SetArray = (x,y,z) => {

        this.Array = CreateArray(x,y,z);

    }

    this.SetArray(x,y,0);
}

// functions for WaterMap

function WaterMap(x,y) {

    this.WaterDepths = new WaterDepths(x,y);
    this.Outflows = new Outflows(x,y);
}

function WaterDepths(x,y) {

    this.SetArray = (x,y,z) => {
        
        this.Array = CreateArray(x,y,z);
    }

    this.SetArray(x,y,0);
}

function Outflows(x,y) {

    this.SetArray = (x,y,z) => {

        this.Array = CreateArray(x,y,z);
    }

    this.SetArray(x,y,"0:0:0:0");
}

// functions for ContaminationMap

function ContaminationMap(x,y) {

    this.Contaminations = new Contaminations(x,y);
}

function Contaminations(x,y) {

    this.SetArray = (x,y,z) => {

        this.Array = CreateArray(x,y,z);
    }

    this.SetArray(x,y,0);
}

// functions for SoilMoistureSimulator

function SoilMoistureSimulator(x,y) {

    this.MoistureLevels = new MoistureLevels(x,y);
}

function MoistureLevels(x,y) {

    this.SetArray = (x,y,z) => {

        this.Array = CreateArray(x,y,z);
    }

    this.SetArray(x,y,0);
}

// functions for SoilContaminationSimulator

function SoilContaminationSimulator(x,y) {

    this.ContaminationCandidates = new ContaminationCandidates(x,y);
    this.ContaminationLevels = new ContaminationLevels(x,y);
}

function ContaminationCandidates(x,y) {

    this.SetArray = (x,y,z) => {

        this.Array = CreateArray(x,y,z);
    }

    this.SetArray(x,y,0);
}

function ContaminationLevels(x,y) {

    this.SetArray = (x,y,z) => {

        this.Array = CreateArray(x,y,z);
    }

    this.SetArray(x,y,0);
}

// functions used for multiple Maps

function CreateArray(x,y,z) {

    let array = [];

    for(let i = 0; i < x * y; i++)
    {
        array.push(z);
    }

    return array.join(" ");
}

// functions for MapThumbnailCameraMover

function MapThumbnailCameraMover() {

    this.CurrentConfiguration = new CurrentConfiguration();
}

function CurrentConfiguration() {
    
    this.SetPosition = (x,y,z) => {

        this.Position = new Position(x,y,z)
    }

    this.SetRotation = (x,y,z,w) => {

        this.Rotation = new Rotation(x,y,z,w)
    }

    this.SetShadowDistance = (d) => {

        this.ShadowDistance = (d).toFixed(1);
    }
    
    this.SetPosition(0,0,0);
    this.SetRotation(0,0,0,0);
    this.SetShadowDistance(150);
}

function Position(x,y,z) {

    this.X = (x).toFixed(1);
    this.Y = (y).toFixed(1);
    this.Z = (z).toFixed(1);
}

function Rotation(x,y,z,w) {

    this.X = (x).toFixed(1);
    this.Y = (y).toFixed(1);
    this.Z = (z).toFixed(1);
    this.W = (w).toFixed(1);
}

// functions for Entities

function Entity(id,tp) {
    
    this.Id = id;
    this.Template = tp;
    this.Components = {};
}

// create flat map and print JSON

let world = new World(4,4);

document.querySelector("#json").textContent = JSON.stringify(world,null,2);

// save json to world.json

function Save() {

    var json = JSON.stringify(new World(4,4), null, 4);

    var blob = new Blob([json], {

        type: 'application/json'

    });

    var url = URL.createObjectURL(blob);
    save = document.createElement("a");
    save.href = url;
    save.download = "world.json";
    save.click();

}

document.querySelector("#save").addEventListener("click",Save);