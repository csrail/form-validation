import Input from "./input";

class Inputs {
    constructor(inputsDataObject) {
        this.inputs = Inputs.createInputObject(inputsDataObject);
    }

    static createInputObject(dataInputsObject) {
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
