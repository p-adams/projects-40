## Event: "input"

The "input" event is triggered when there is an input change in a form field. It provides the consumer with flexibility by allowing them to track and manipulate the input field data before the form is submitted.

Payload:
The payload for the "input" event has the following structure:

```
{
    data: {
        field: string; // The name or identifier of the input field
        value: string; // The current value of the input field
    };
}
```

Usage:
To handle the "input" event, you can listen for it and access the field and value data in the consumer code. For example:

```
dispatch("input", {
    data: { field: e.currentTarget.name, value: username },
});
// consumer
on:input={(e) => handleIdentityInput(e.detail.data)}
```

In the above code, e.currentTarget.name represents the name or identifier of the input field, and username is the current value of the input field.

Consumer Flexibility:
The "input" event allows the consumer to track and respond to individual input changes in real-time. This flexibility enables the consumer to implement custom logic, such as live validation, formatting, or updating dependent fields based on the input changes. By providing access to the field and value data, the consumer has the freedom to handle the input data as needed.

## Event: "identitySubmit"

The "identitySubmit" event is triggered when a form with identity-related data, such as username and password, is submitted. It provides the consumer with flexibility by allowing them to handle the submitted identity data and perform any necessary actions or validations.

Payload:
The payload for the "identitySubmit" event has the following structure:

```
{
    data: {
        username: string; // The submitted username value
        password: string; // The submitted password value
    };
}
```

Usage:
To handle the "identitySubmit" event, you can listen for the form's submission event and prevent the default behavior (page refresh) using preventDefault. Then, dispatch the "identitySubmit" event with the submitted username and password. For example:

```
on:submit|preventDefault={(e) =>
    dispatch("identitySubmit", { data: { username, password } })
}
// consumer
on:identitySubmit={(e) => handleSubmit(e.detail.data)
```

In the above code, username and password represent the values entered in the respective input fields.

Consumer Flexibility:
The "identitySubmit" event allows the consumer to handle the submitted identity data in a way that suits their needs. It provides the consumer with the flexibility to perform actions such as authentication, validation, making API requests, or triggering other application-specific behavior based on the submitted data. By exposing the username and password values, the consumer can customize the handling of this sensitive information according to their application's requirements.

By utilizing these "input" and "identitySubmit" events, consumers have the flexibility to track and manipulate input field data in real-time and handle the submission of identity-related data as per their specific needs and application logic.
