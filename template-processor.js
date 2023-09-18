'use strict';

class TemplateProcessor{
    constructor(template){

        this.template = template;
    }

    fillIn(dictionary){
        let str = this.template;
        const matches = str.match(/{{.*?}}/g);

        for (const i in matches){
            if (matches[i] != null){
                const match = matches[i];
                const value = dictionary[match.substring(2, match.indexOf("}}"))] || " ";
                str = str.replace(match, value);
            }
        }
        
        
        return str;

            
    }

    


}