'use strict';
function TemplateProcessor(template){
    this.template = template;
}

TemplateProcessor.prototype.fillIn = function(dictionary) {

    let updatedTemplate = this.template;
    for (const key in dictionary) {
        if (this.template.indexOf("{{" + key + "}}") > -1) {
            updatedTemplate = updatedTemplate.replace(new RegExp("{{" + key + "}}", 'g'), dictionary[key]);
        } else {
            continue;
        }
    }
    const regex = /{{.*?}}/g;
    updatedTemplate.replaceAll(regex, " ");
    return updatedTemplate;
}