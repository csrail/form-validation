import Options from "./options";

class Select {
    constructor(selectDataObject) {
        this.element = selectDataObject.element;
        this.options = new Options(selectDataObject.options).options;
    }
}

export default Select;
