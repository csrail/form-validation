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
            options: [
                {
                    description: "---",
                    value: "",
                },
                {
                    description: "New Zealand",
                    value: "NZ",
                },
                {
                    description: "Australia",
                    value: "AUS",
                },
            ],
            validators: [
                {
                    attribute: "required",
                    value: "required",
                },
            ],
        },
        {
            objectType: "input",
            element: "input",
            type: "tel",
            id: "input-phone-number",
            name: "phone number",
            description: "phone, (format 123-456-789)",
            hint: "Format 123-456-789",
            validators: [
                {
                    attribute: "required",
                    value: "",
                },
                {
                    attribute: "pattern",
                    value: "[0-9]{3}-[0-9]{4}-[0-9]{3}",
                },
            ],
        },
        {
            objectType: "input",
            element: "input",
            type: "text",
            id: "input-zip-code",
            description: "zip code",
            validators: [
                {
                    attribute: "required",
                    value: "",
                },
                {
                    attribute: "minlength",
                    value: 4,
                },
            ],
        },
    ],
};

export default formData;
