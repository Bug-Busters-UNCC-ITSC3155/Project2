'use strict';

class TemplateProcessor{
    constructor(template){

        this.template = template;
    }

    fillIn(dictionary){
        var str = this.template;
        str = str.split(/{{.*?}}/);

        for(let i = 0; i < str.length;i++){
            for((key,value) in dictionary){
                if(str[i] == key){
                    str[i] = value;
                }
            }
            
        }

            
    }

    


}