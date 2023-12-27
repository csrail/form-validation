import "./stylesheets/style.css";
import formData from "./data/data";
import Form from "./javascript/models/form";
import Fields from "./javascript/models/fields";

(() => {
    const form = new Form(formData, new Fields(formData.fields));

    const fragment = document.createDocumentFragment();

    const formElement = document.createElement("form");
    formElement.id = form.id;
    formElement.setAttribute("method", "POST");
    formElement.setAttribute("action", "#");
    formElement.addEventListener("submit", (e) => {
        e.preventDefault();
    });

    formElement.addEventListener("focusout", (event) => {
        if (!event.target.checkValidity()) {
            event.currentTarget.reportValidity();
        }
    });

    form.fields.forEach((field) => {
        const component = document.createElement("div");
        component.classList.add("input-line");

        const labelDivider = document.createElement("div");
        const inputDivider = document.createElement("div");

        const labelElement = document.createElement("label");
        labelElement.textContent = field.label.description;
        labelElement.setAttribute("for", field.label.id);

        const fieldElement = document.createElement(field.line.element);
        fieldElement.type = field.line.type;
        fieldElement.id = field.line.id;
        fieldElement.setAttribute("name", field.line.name);

        field.line.validators.forEach((validator) => {
            fieldElement.setAttribute(validator.attribute, validator.value);
        });

        labelDivider.appendChild(labelElement);
        inputDivider.appendChild(fieldElement);
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
