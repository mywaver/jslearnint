'use strict'
let collections=[ 
    "a","a","a",
 "e","e",,"e","e","e","e",
 "g","g","g","g","g","g","g","g"
]
function count_same_element(collection){

let result=[];

let arr=[];
for(let i=0;i<collection.length;i++){
//数组可以自定义属性
    if(!arr[collection[i]]){
        arr[collection[i]]={}
        arr[collection[i]].key=collection[i];
        arr[collection[i]].count=1
    }else{
        arr[collection[i]].count++
    }
}
console.log(arr)
for(let i in arr){
    result.push(arr[i])
}

return result;

}

count_same_element(collections);
   
