// import csv
// import random

class FindHobby{

    constructor(){

    }

    getInterests(){
        // with open('hobby.csv') as f:
        //     reader = csv.reader(f)
        //     count = 0
        //     self.headers = []
        //     setListDict = dict()
        //     for row in reader:
        //         if count == 0:
        //             self.headers = row
        //             for header in self.headers:
        //                 setListDict[header] = set()
        //         else:
        //             cleaned_row = [len(i) for i in row[1:]]
        //             for index in range(len(cleaned_row)):
        //                 if cleaned_row[index] == 1:
        //                     setListDict[self.headers[index]].add(row[0]) 
        //                 else:
        //                     pass
        //                     #print("This hobby cannot be done {}".format(self.headers[index]))
        //         count += 1
        // self.interestDictSet = setListDict
        // return setListDict
    }
                
    loadParams(params_list){
        // self.params_list = params_list
        // result_set = set()
        // for keyIndex,key in enumerate(self.params_list.keys()):
        //     if keyIndex == 0:
        //         result_set = self.interestDictSet[key]
        //     else:
        //         if self.params_list[key] == 1:
        //             result_set = result_set.intersection(self.interestDictSet[key])
        //         elif self.params_list[key] == 0:
        //             result_set = result_set.difference(self.interestDictSet[key])

        // self.result_set = result_set
    }
            
    suggest_activity(){
        // #activity = random.sample(self.result_set,1)
        // print(self.interestDictSet)
        // #print(self.result_set)
        // #print(activity)
    }

}

var findHobby = new FindHobby();
findHobby.getInterests()