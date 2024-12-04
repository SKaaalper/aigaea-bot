export const logger = (message, level = 'info', details = '') => {
    const timestamp = new Date().toISOString();
    switch (level) {
        case 'info':
            console.log(`[${timestamp}] [INFO]: ${message}`);
            break;
        case 'success':
            console.log(`[${timestamp}] [SUCCESS]: ${message}`);
            break;
        case 'error':
            console.log(`[${timestamp}] [ERROR]: ${message}`);
            if (details) {
                console.log(`Details: ${details}`);
            }
            break;
        case 'warning':
            console.log(`[${timestamp}] [WARNING]: ${message}`);
            break;
        default:
            console.log(`[${timestamp}] [LOG]: ${message}`);
            break;
    }
};

