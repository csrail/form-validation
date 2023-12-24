import Input from "./input";

class Inputs {
    constructor(dataInputsObject) {
        this.dataInputsObject = dataInputsObject;
        this.inputs = Inputs.createInputObject(dataInputsObject);
    }

    static createInputObject(dataInputsObject) {
        const collection = [];

        dataInputsObject.forEach((obj) => {
            collection.push(new Input(obj));
        });

        return collection;
    }
}

export default Inputs;
