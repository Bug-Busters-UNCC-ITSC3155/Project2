'use strict';

class TemplateProcessor{
    constructor(template){

        this.template = template;
    }

    fillIn(dictionary){
        let str = this.template;
        let matches = str.match(/{{.*?}}/g);


        for (let i in matches){
            let match = matches[i];
            let value = dictionary[match.substring(2, match.indexOf("}}"))] || " ";
            str = str.replace(match, value);
        }
        
        return str;

            
    }

    


}