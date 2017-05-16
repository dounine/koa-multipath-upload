Object.prototype.toFormData = function () {
    var objToFormData = function (obj,obj2,sec) {
        if(obj){
            var count = 0;
            for(var name in obj){
                var val = obj[name];
                if(val instanceof Array){
                    val.forEach(function (item,index) {
                        for(var name2 in item){
                            var val2 = item[name2];
                            if(val2 instanceof Array){
                                val2.forEach(function (dItem,dIndex) {
                                    objToFormData(dItem,obj,name+'['+index+'].'+name2);
                                });
                            }else{
                                if((typeof val2)!='function'){
                                    obj[name+'['+index+'].'+name2] = val2;
                                }
                            }
                        }
                    });
                    delete obj[name];
                }else if(sec){
                    if((typeof val)!='function'){
                        obj2[sec+'['+count+'].'+name] = val;
                        count++;
                    }
                }
            }
        }
    }
    objToFormData(this);
    return this;
}
var cc = [{a:'1',b:'2'},{a:'3',b:'4'}];
var lists = [{name:'1234',age:12},{name:'33',age:22,bb:cc}];
var lake = {name:'hhl',age:20,ll:lists};
console.info(lake.toFormData());
