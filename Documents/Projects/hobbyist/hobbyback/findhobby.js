const csv = require('csv-parser')
const fs = require('fs')

function isNumber(n) { return /^-?[\d.]+(?:e-?\d+)?$/.test(n); }

function getRandomItem(set) {
    // If set is empty don't do
    let items = Array.from(set);
    return items[Math.floor(Math.random() * items.length)];
}

function pop(object, propertyName) {
    let temp = object[propertyName];
    delete object[propertyName];
    return temp;
}

class HobbySet extends Set{
    isSuperset(subset) {
       for (let elem of subset) {
           if (!this.has(elem)) {
               return false
           }
       }
       return true
   }
   
    union(setB) {
       let _union = new HobbySet(this)
       for (let elem of setB) {
           _union.add(elem)
       }
       return _union
   }
   
    intersection(setB) {
       let _intersection = new HobbySet()
       for (let elem of setB) {
           if (this.has(elem)) {
               _intersection.add(elem)
           }
       }
       return _intersection
   }
   
    symmetricDifference(setB) {
       let _difference = new HobbySet(this)
       for (let elem of setB) {
           if (_difference.has(elem)) {
               _difference.delete(elem)
           } else {
               _difference.add(elem)
           }
       }
       return _difference
   }
   
    difference(setB) {
       let _difference = new HobbySet(this)
       for (let elem of setB) {
           _difference.delete(elem)
       }
       return _difference
   }
}

class FindMyHobby {
    findHobby(params,callback){
        this.csvReader(params,function(resToSend){
            callback(resToSend)
          })
    } 
    
    csvReader(params,callback){
        var setDict = {}
        var csvHeaders = []
        fs.createReadStream('hobby.csv')
            .pipe(csv())
            .on('headers', (headers) => {
                csvHeaders = headers
                for(let header of headers){
                    setDict[header] = new HobbySet();
                }
            })
            .on('data', (data) => {
                for (const [key, value] of Object.entries(data)) {
                    if(value == "X"){
                        setDict[csvHeaders[key-1]].add(data[0])
                    }
                }
            })
            .on('end', () => {
                var activityToSend = this.filterOutHobbies(setDict,params)
                callback(activityToSend)
        })
    }
    
    filterOutHobbies(listofApprovedHobbies,params){
        var result_set;
        var truthObjectArray = {}
        var truthObjectArrayCount = 0
        for(const [key,value] of Object.entries(params)){
            if(isNumber(value)){
                truthObjectArray[key] = value
                truthObjectArrayCount += 1
            }
        }
        if(truthObjectArrayCount >= 1){
            for(const [key,value] of Object.entries(params)){
                if (!isNumber(value)){
                    pop(params,key)
                    continue
                }
                var index = Object.keys(params).indexOf(key);
                if(index == 0){
                    result_set = new HobbySet(listofApprovedHobbies[key])
                } else {
                    if(value == 1){
                        result_set = result_set.intersection(listofApprovedHobbies[key])
                    } else if(value == 0) {
                        result_set = result_set.difference(listofApprovedHobbies[key])
                    }
                }
            }
        } else {
            result_set = listofApprovedHobbies.Indoor.union(listofApprovedHobbies.Outdoor.union(listofApprovedHobbies.Day.union(listofApprovedHobbies.Night.union(listofApprovedHobbies.Date))))
        }
        return getRandomItem(result_set)
    }
}

module.exports = FindMyHobby;

