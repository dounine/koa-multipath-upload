var listToData = function (obj,arryName,arryData) {
    if(arryName&&arryData){
        delete obj[arryName];
        arryData.forEach(function (item,index) {
            for(var name in item){
                obj[arryName+'['+index+'].'+name] = item[name];
            }
        });
    }
}
var lists = [{name:'1234',age:12},{name:'33',age:22}];
var lake = {name:'hhl',age:20,ll:lists};
listToData(lake,'ll',lists);
console.info(lake);
