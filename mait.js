let arr = []

for(let i = 0; i < Infinity;i++) {
let add=prompt( "command name" )
newAdd = add.split(',')
if(newAdd[0]=="add"){
     arr.push(newAdd[1])
               
}else if(newAdd[0]=='del'){
    for (let j = 0; j < arr.length; j++) {
        (arr[j] === newAdd[1]); if (arr[j] === newAdd[1]) {
            arr.splice(j, 1);  
                 console.log("Удалено");
        }
    }
    
}else if (newAdd[0]=="stop"){
    break
}
console.log(arr[i]);
}
