class Form {
    constructor(formDataObject, inputsObject) {
        this.id = formDataObject.id;
        this.name = formDataObject.name;
        this.inputs = inputsObject.inputs;
    }
}

export default Form;
