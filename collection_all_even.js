'use strict'

function collect_all_even(collection){
let result =[]
for(let i=0;i<collection.length;i++){
    
    if(collection[i]%2==0){

        result.push(colletion[i]);
        
    }

}
return result;

}
var collection_a=[1,3,54,6,788,98];
collect_all_even(collection_a);