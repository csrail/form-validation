import Label from "./label";
import Validators from "./validators";
import FieldInterface from "./fieldInterface";

class Field {
    constructor(fieldDataObject, validatorsDataObject) {
        this.FieldType = new FieldInterface(
            fieldDataObject.objectType,
        ).constructorType;
        this.element = fieldDataObject.element;
        this.label = new Label(fieldDataObject);
        this.validators = new Validators(validatorsDataObject).validators;

        this.line = new this.FieldType(fieldDataObject, validatorsDataObject);
    }
}

export default Field;
