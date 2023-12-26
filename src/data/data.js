const formData = {
    id: "registration-form",
    name: "registration",
    fields: [
        {
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
    ],
};

export default formData;
