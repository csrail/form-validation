import Label from "./label";
import Validators from "./validators";
import FieldInterface from "./fieldInterface";

class Field {
    constructor(fieldDataObject, validatorsDataObject) {
        this.FieldConstructor = new FieldInterface(
            fieldDataObject.objectType,
        ).constructorType;
        this.label = new Label(fieldDataObject);
        this.validators = new Validators(validatorsDataObject).validators;

        this.line = new this.FieldConstructor(
            fieldDataObject,
            validatorsDataObject,
        );
    }
}

export default Field;
