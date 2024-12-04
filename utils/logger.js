export const logger = (message, level = 'info', details = '') => {
    switch (level) {
        case 'info':
            console.log(`[INFO]: ${message}`);
            break;
        case 'success':
            console.log(`[SUCCESS]: ${message}`);
            break;
        case 'error':
            console.log(`[ERROR]: ${message}`);
            if (details) {
                console.log(`Details: ${details}`);
            }
            break;
        case 'warning':
            console.log(`[WARNING]: ${message}`);
            break;
        default:
            console.log(`[LOG]: ${message}`);
            break;
    }
};

