import Input from "./input";

class Inputs {
    constructor(formDataObject) {
        this.dataInputObject = formDataObject.inputs;
        this.inputs = this.createInputObject(this.dataInputObject);
    }

    createInputObject(dataInputObject) {
        const collection = [];

        dataInputObject.forEach((obj) => {
            collection.push(new Input(obj));
        });

        return collection;
    }
}

export default Inputs;
