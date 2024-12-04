export const logger = (message, level = 'info', details = '') => {
    const timestamp = new Date().toISOString();  // Get the current UTC timestamp in ISO format
    let logMessage = `[${timestamp}] [${level.toUpperCase()}]: ${message}`;
    
    if (details) {
        logMessage += ` | Details: ${details}`;
    }
    
    // Output the log message based on the log level
    switch (level) {
        case 'info':
            console.log(logMessage);
            break;
        case 'success':
            console.log(logMessage);
            break;
        case 'error':
            console.error(logMessage);
            break;
        case 'warning':
            console.warn(logMessage);
            break;
        default:
            console.log(logMessage);
            break;
    }
};
