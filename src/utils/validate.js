export const checkValidData = (email, password) => {
    // Basic regex for email validation (allows standard characters, trims spaces automatically later)
    const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);

    if (!isEmailValid) return "Please enter a valid email address.";
    
    // We already check for 6 chars in Login.js, but returning null means no errors found manually
    return null;
};
