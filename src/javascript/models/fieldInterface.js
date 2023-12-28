import Select from "./select";
import Input from "./input";

class FieldInterface {
    constructor(elementType) {
        this.constructorType = FieldInterface.getConstructorType(elementType);
    }

    static getConstructorType(elementType) {
        const constructors = {
            input: Input,
            select: Select,
            // textarea: Textarea,
        };

        return constructors[elementType];
    }
}

export default FieldInterface;
