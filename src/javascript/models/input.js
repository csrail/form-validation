import Label from "./label";
import Validators from "./validators";

class Input {
    constructor(inputDataObject) {
        this.type = inputDataObject.type;
        this.id = inputDataObject.id;
        this.name = inputDataObject.name;
        this.labelObject = new Label(inputDataObject);
        this.validatorsObject = new Validators(inputDataObject.validators);
    }
}

export default Input;
