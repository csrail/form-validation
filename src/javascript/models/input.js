import Label from "./label";
import Validators from "./validators";

class Input {
    constructor(inputDataObject, validatorsDataObject) {
        this.type = inputDataObject.type;
        this.id = inputDataObject.id;
        this.name = inputDataObject.name;
        this.label = new Label(inputDataObject);
        this.validators = new Validators(validatorsDataObject).validators;
    }
}

export default Input;
