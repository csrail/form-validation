import Input from "./input";

class Inputs {
    constructor(inputsDataObject) {
        this.inputs = Inputs.createInputsObject(inputsDataObject);
    }

    static createInputsObject(inputsDataObject) {
        const collection = [];

        inputsDataObject.forEach((inputDataObject) => {
            collection.push(
                new Input(inputDataObject, inputDataObject.validators),
            );
        });

        return collection;
    }
}

export default Inputs;
