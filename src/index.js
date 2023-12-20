import formData from "./data/data";
import Form from "./javascript/models/form";
import Inputs from "./javascript/models/inputs";

(() => {
    const inputs = new Inputs(formData);
    const form = new Form(formData, inputs);

    const fragment = document.createDocumentFragment();

    form.inputs.forEach((input) => {
        const component = document.createElement("div");

        const inputElement = document.createElement("input");
        inputElement.type = input.type;
        inputElement.textContent = input.name;
        inputElement.id = input.id;

        component.appendChild(inputElement);
        fragment.appendChild(component);
    });

    document.body.appendChild(fragment);

    return {};
})();
