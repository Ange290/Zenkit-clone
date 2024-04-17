export default class CustomError extends Error {
    constructor(message){/**
     * Calls the parent constructor with the specified message.
     * @param {string} message - The error message.
     */
    super(message);
   
}
}