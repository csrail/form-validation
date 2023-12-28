const formData = {
    id: "registration-form",
    name: "registration",
    fields: [
        {
            objectType: "input",
            element: "input",
            type: "text",
            id: "input-username",
            name: "username",
            description: "username",
            validators: [
                {
                    attribute: "required",
                    value: "",
                },
                {
                    attribute: "minlength",
                    value: 5,
                },
            ],
        },
        {
            objectType: "input",
            element: "input",
            type: "email",
            id: "input-email",
            name: "email",
            description: "email",
            validators: [
                {
                    attribute: "required",
                    value: "",
                },
            ],
        },
        {
            objectType: "select",
            element: "select",
            id: "select-country",
            name: "country",
            description: "select your country:",
            validators: [
                {
                    attribute: "required",
                    value: "required",
                },
            ],
        },
    ],
};

export default formData;
