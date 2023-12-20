import formData from "./data/data";
import Form from "./javascript/models/form";
import Inputs from "./javascript/models/inputs";

(() => {
    const inputs = new Inputs(formData);
    const form = new Form(formData, inputs);

    return {};
})();
