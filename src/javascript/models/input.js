import Validators from "./validators";

class Input {
    constructor(inputDataObject, validatorsDataObject) {
        this.element = inputDataObject.element;
        this.type = inputDataObject.type;
        this.id = inputDataObject.id;
        this.name = inputDataObject.name;
        this.validators = new Validators(validatorsDataObject).validators;
    }
}

export default Input;
