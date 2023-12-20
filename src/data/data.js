const formData = {
    name: "registration",
    inputs: [
        {
            type: "text",
            id: "input-username",
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
