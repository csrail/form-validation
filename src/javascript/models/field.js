import Label from "./label";
import Validators from "./validators";

class Field {
    constructor(fieldDataObject, validatorsDataObject) {
        this.element = fieldDataObject.element;
        this.type = fieldDataObject.type;
        this.id = fieldDataObject.id;
        this.name = fieldDataObject.name;
        this.label = new Label(fieldDataObject);
        this.validators = new Validators(validatorsDataObject).validators;
    }
}

export default Field;
