import Label from "./label";

class Input {
    constructor(inputDataObject) {
        this.type = inputDataObject.type;
        this.id = inputDataObject.id;
        this.name = inputDataObject.name;
        this.labelObject = new Label(inputDataObject);
    }
}

export default Input;
