import Label from "./label";
import Validators from "./validators";
import FieldInterface from "./fieldInterface";

class Field {
    constructor(fieldDataObject, validatorsDataObject) {
        this.ConstructorType = new FieldInterface(
            fieldDataObject.objectType,
        ).constructorType;
        this.element = fieldDataObject.element;
        this.type = fieldDataObject.type;
        this.id = fieldDataObject.id;
        this.name = fieldDataObject.name;
        this.label = new Label(fieldDataObject);
        this.validators = new Validators(validatorsDataObject).validators;

        this.line = new this.ConstructorType(
            fieldDataObject,
            validatorsDataObject,
        );
    }
}

export default Field;
