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

        validatorsDataObject.forEach((validator) => {
            collection.push(new Validator(validator));
        });

        return collection;
    }
}

export default Validators;
