import Validator from "./validator";

class Validators {
    constructor(validatorsDataObject) {
        this.validatorsDatObject = validatorsDataObject;
        this.validators = Validators.createValidatorObjects(
            this.validatorsDatObject,
        );
    }

    static createValidatorObjects(validatorDataObject) {
        const collection = [];

        validatorDataObject.forEach((validator) => {
            collection.push(new Validator(validator));
        });

        return collection;
    }
}

export default Validators;
