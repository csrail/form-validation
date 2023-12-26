class Form {
    constructor(formDataObject, fieldsObject) {
        this.id = formDataObject.id;
        this.name = formDataObject.name;
        this.fields = fieldsObject.fields;
    }
}

export default Form;
