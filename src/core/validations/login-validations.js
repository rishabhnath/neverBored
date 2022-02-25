export function validateLogin(values) {
    const errors = {};
    // to check node name
    if (!values.email) {
        errors.email = "Email is required";
    }

    if (!values.password) {
        errors.password = "Password is required";
    }

    return errors;
}

export function validateRegistration(values) {
    const errors = {};
    // to check node name
    if (!values.email) {
        errors.email = "Email is required";
    }

    if (!values.password) {
        errors.password = "Password is required";
    }

    if (values.confirmPassword !== values.password) {
        errors.confirmPassword = "Password not matched";
    }

    return errors;
}
