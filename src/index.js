import formData from "./data/data";
import Form from "./javascript/models/form";
import Inputs from "./javascript/models/inputs";

(() => {
    const inputs = new Inputs(formData);
    const form = new Form(formData, inputs);

    const fragment = document.createDocumentFragment();

    form.inputs.forEach((input) => {
        const component = document.createElement("div");
        const labelDivider = document.createElement("div");
        const inputDivider = document.createElement("div");

        const labelElement = document.createElement("label");
        labelElement.textContent = input.labelObject.description;

        const inputElement = document.createElement("input");
        inputElement.type = input.type;
        inputElement.id = input.id;
        inputElement.setAttribute("name", input.name);

        labelDivider.appendChild(labelElement);
        inputDivider.appendChild(inputElement);
        component.appendChild(labelDivider);
        component.appendChild(inputDivider);
        fragment.appendChild(component);
    });

    document.body.appendChild(fragment);

    return {};
})();
