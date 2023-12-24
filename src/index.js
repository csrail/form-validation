import formData from "./data/data";
import Form from "./javascript/models/form";
import Inputs from "./javascript/models/inputs";

(() => {
    const form = new Form(formData, new Inputs(formData.inputs));

    const fragment = document.createDocumentFragment();

    const formElement = document.createElement("form");
    formElement.id = form.id;
    formElement.setAttribute("method", "POST");
    formElement.setAttribute("action", "#");
    formElement.addEventListener("submit", (e) => {
        e.preventDefault();
    });

    form.inputs.forEach((input) => {
        const component = document.createElement("div");
        component.classList.add("input-line");

        const labelDivider = document.createElement("div");
        const inputDivider = document.createElement("div");

        const labelElement = document.createElement("label");
        labelElement.textContent = input.labelObject.description;
        labelElement.setAttribute("for", input.labelObject.id);

        const inputElement = document.createElement("input");
        inputElement.type = input.type;
        inputElement.id = input.id;
        inputElement.setAttribute("name", input.name);

        input.validatorsObject.validators.forEach((validator) => {
            inputElement.setAttribute(validator.attribute, validator.value);
        });

        labelDivider.appendChild(labelElement);
        inputDivider.appendChild(inputElement);
        component.appendChild(labelDivider);
        component.appendChild(inputDivider);
        fragment.appendChild(component);
    });

    const submitInputElement = document.createElement("input");
    submitInputElement.id = "form-submit";
    submitInputElement.setAttribute("type", "submit");

    formElement.append(fragment);
    formElement.append(submitInputElement);
    document.body.appendChild(formElement);

    return {};
})();
