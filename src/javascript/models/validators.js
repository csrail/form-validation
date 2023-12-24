import Validator from "./validator";

class Validators {
    constructor(validatorsDataObject) {
        this.validatorsDatObject = validatorsDataObject;
        this.validators = Validators.createValidatorObjects(
            this.validatorsDatObject,
        );
    }

    static createValidatorObjects(validatorsDataObject) {
        const collection = [];

        validatorsDataObject.forEach((validatorDataObject) => {
            collection.push(new Validator(validatorDataObject));
        });

        return collection;
    }
}

export default Validators;
