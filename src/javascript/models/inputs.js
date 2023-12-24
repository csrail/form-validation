import Input from "./input";

class Inputs {
    constructor(inputsDataObject) {
        this.inputs = Inputs.createInputsObject(inputsDataObject);
    }

    static createInputsObject(dataInputsObject) {
        const collection = [];

        dataInputsObject.forEach((dataInputObject) => {
            collection.push(
                new Input(dataInputObject, dataInputObject.validators),
            );
        });

        return collection;
    }
}

export default Inputs;
