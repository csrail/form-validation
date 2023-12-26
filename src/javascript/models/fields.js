import Field from "./field";

class Fields {
    constructor(fieldsDataObject) {
        this.fields = Fields.createFieldsObject(fieldsDataObject);
    }

    static createFieldsObject(fieldsDataObject) {
        const collection = [];

        fieldsDataObject.forEach((fieldDataObject) => {
            collection.push(
                new Field(fieldDataObject, fieldDataObject.validators),
            );
        });

        return collection;
    }
}

export default Fields;
