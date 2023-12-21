const formData = {
    name: "registration",
    inputs: [
        {
            type: "text",
            id: "input-username",
            name: "username",
            description: "username",
            validators: [
                {
                    attribute: "required",
                },
                {
                    attribute: "minlength",
                },
            ],
        },
        {
            type: "email",
            id: "input-email",
            name: "email",
            description: "email",
            validators: [
                {
                    attribute: "required",
                },
            ],
        },
    ],
};

export default formData;
