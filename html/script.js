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

    this.setGameVersion = (g) => {
        
        this.GameVersion = g;
    }
    this.setTimeStamp = (d) => {
        
        this.Timestamp = d.toTimestamp();
    }
    this.setSingletons = (x,y) => {
        
        this.Singletons = new Singletons(x,y);
    }

    this.setGameVersion("0.5.0.2-d3e4ac7-xsw");
    this.setTimeStamp(new Date());
    this.setSingletons(x,y);

    this.toObject = () => {

        return {

            "GameVersion": this.GameVersion,
            "TimeStamp": this.Timestamp,
            "Singletons": this.Singletons.toObject(),
            "Entities": this.Entities
        }
    }

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

    this.toObject = () => {

        return {

            "MapSize" : this.MapSize,
            "TerrainMap": this.TerrainMap.toObject(),
            "WaterMap": this.WaterMap.toObject(),
            "ContaminationMap": this.ContaminationMap.toObject(),
            "SoilMoistureSimulator": this.SoilMoistureSimulator.toObject(),
            "SoilContaminationSimulator": this.SoilContaminationSimulator.toObject(),
            "MapThumbnailCameraMover": this.MapThumbnailCameraMover,
        }
    }
}

// functions for MapSize

function MapSize(x,y) {

    this.setSize = (x,y) => {
        
        this.Size = new Size(x,y)
    }

    this.setSize(x,y);
}

function Size(x,y) {

    this.setX = (x) => {

        this.X = x;
    }

    this.setY = (y) => {

        this.Y = y;
    }

    this.setX(x);
    this.setY(y);
}

// functions for TerrainMap

function TerrainMap(x,y) {

    this.setHeights = (x,y) => {

        this.Heights = new Heights(x,y);
    }

    this.setHeights(x,y)

    this.toObject = () => {

        return {

            "Heights": this.Heights.toObject()
        }
    }

}

function Heights(x,y) {

    this.setArray = (x,y,z) => {

        this.Array = new ArrayData(x,y,z);

    }

    this.setArray(x,y,0);

    this.toObject = () => {

        return {

            "Array": this.Array.toString()
        }
    }
}

// functions for WaterMap

function WaterMap(x,y) {

    this.WaterDepths = new WaterDepths(x,y);
    this.Outflows = new Outflows(x,y);

    this.toObject = () => {

        return {

            "WaterDepths": this.WaterDepths.toObject(),
            "Outflows": this.Outflows.toObject()
        }
    }
}

function WaterDepths(x,y) {

    this.setArray = (x,y,z) => {
        
        this.Array = new ArrayData(x,y,z);
    }

    this.setArray(x,y,0)

    this.toObject = () => {

        return {

            "Array": this.Array.toString()
        }
    }
}

function Outflows(x,y) {

    this.setArray = (x,y,z) => {

        this.Array = new ArrayData(x,y,z);
    }

    this.setArray(x,y,"0:0:0:0");

    this.toObject = () => {

        return {

            "Array": this.Array.toString()
        }
    }
}

// functions for ContaminationMap

function ContaminationMap(x,y) {

    this.setContaminations = (x,y) => {

        this.Contaminations = new Contaminations(x,y);
    }

    this.setContaminations(x,y);

    this.toObject = () => {

        return {

            "Contaminations": this.Contaminations.toObject()
        }  
    }
}

function Contaminations(x,y) {

    this.setArray = (x,y,z) => {

        this.Array = new ArrayData(x,y,z);
    }

    this.setArray(x,y,0);

    this.toObject = () => {

        return {

            "Array": this.Array.toString()
        }
    }
}

// functions for SoilMoistureSimulator

function SoilMoistureSimulator(x,y) {

    this.setMoistureLevels = (x,y) => {

        this.MoistureLevels = new MoistureLevels(x,y);
    }

    this.setMoistureLevels(x,y);

    this.toObject = () => {

        return {

            "MoistureLevels": this.MoistureLevels.toObject()
        }  
    }
}

function MoistureLevels(x,y) {

    this.setArray = (x,y,z) => {

        this.Array = new ArrayData(x,y,z);
    }

    this.setArray(x,y,0);

    this.toObject = () => {

        return {

            "Array": this.Array.toString()
        }
    }
}

// functions for SoilContaminationSimulator

function SoilContaminationSimulator(x,y) {

    this.ContaminationCandidates = new ContaminationCandidates(x,y);
    this.ContaminationLevels = new ContaminationLevels(x,y);

    this.toObject = () => {
        return {

            "ContaminationCandidates": this.ContaminationCandidates.toObject(),
            "ContaminationLevels": this.ContaminationLevels.toObject()
        }

    }
}

function ContaminationCandidates(x,y) {

    this.setArray = (x,y,z) => {

        this.Array = new ArrayData(x,y,z);
    }

    this.setArray(x,y,0);

    this.toObject = () => {

        return {

            "Array": this.Array.toString()
        }
    }
}

function ContaminationLevels(x,y) {

    this.setArray = (x,y,z) => {

        this.Array = new ArrayData(x,y,z);
    }

    this.setArray(x,y,0);

    this.toObject = () => {

        return {

            "Array": this.Array.toString()
        }
    }
}

// functions used for multiple Maps

function ArrayData(x, y, z) {

    this.setArray = (x, y, z) => {
  
      this.Array = [];
  
      for (let xc = 0; xc < x; xc++) {
  
        this.Array[xc] = []
  
        for (let yc = 0; yc < y; yc++) {
  
          this.Array[xc][yc] = z;
        }
  
      }
    }
  
    this.setArray(x, y, z);
  
    this.toString = () => {
  
      let strings = [];
  
      for (let x = 0; x < this.Array.length; x++) {
      
        strings[x] = this.Array[x].join(" ");
      }
  
      return strings.join(" ");
    }
  
  }

// functions for MapThumbnailCameraMover

function MapThumbnailCameraMover() {

    this.CurrentConfiguration = new CurrentConfiguration();
}

function CurrentConfiguration() {
    
    this.setPosition = (x,y,z) => {

        this.Position = new Position(x,y,z)
    }

    this.setRotation = (x,y,z,w) => {

        this.Rotation = new Rotation(x,y,z,w)
    }

    this.setShadowDistance = (d) => {

        this.ShadowDistance = (d).toFixed(1);
    }
    
    this.setPosition(0,0,0);
    this.setRotation(0,0,0,0);
    this.setShadowDistance(150);
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

console.log(world.Singletons.toString())

document.querySelector("#json").textContent = JSON.stringify(world.toObject(),null,2);

// save json to world.json

function Save() {

    var json = JSON.stringify((new World(4,4)).toObject(),null,2);

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