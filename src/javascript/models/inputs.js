import Input from "./input";

class Inputs {
    constructor(dataInputsObject) {
        this.dataInputsObject = dataInputsObject;
        this.inputs = Inputs.createInputObject(dataInputsObject);
    }

    static createInputObject(dataInputsObject) {
        const collection = [];

        dataInputsObject.forEach((dataInputObject) => {
            collection.push(new Input(dataInputObject));
        });

        return collection;
    }
}

export default Inputs;
