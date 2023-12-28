import Option from "./option";

class Options {
    constructor(optionsDataObject) {
        this.options = Options.createOptionsObject(optionsDataObject);
    }

    static createOptionsObject(optionsDataObject) {
        const collection = [];

        optionsDataObject.forEach((option) => {
            collection.push(new Option(option));
        });

        return collection;
    }
}

export default Options;
