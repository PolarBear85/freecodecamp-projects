const recordCollection = {
        2548: {
        albumTitle: "Slippery When Wet",
        artist: "Bon Jovi",
        tracks: ["Let It Rock", "You Give Love A Bad Name"]
    },
    2468: {
        albumTitle: "1999",
        artist: "Prince",
        tracks: ["1999","Little Red Corvette"]
    },
    1245: {
        artist: "Robert Palmer",
        tracks: []
    },
    5439: {
        albumTitle:"ABBA Gold"
    }
};

function updateRecords (records,id,prop,value) {
    let hasTracks = Object.hasOwn(records[id],prop);

    if (value !="") {
        if (prop === "tracks") {
            if (hasTracks === true) {
                records[id][prop].push(value); 

            } else {
                records[id][prop] = [];
                records[id][prop].push(value);
            }

        } else if (prop != "tracks") {
            records[id][prop]=value;
        }
    } else if(value==="") {
        delete records[id][prop];
    }
    return records;
}

console.log(updateRecords(recordCollection,5439,"tracks","dave"))