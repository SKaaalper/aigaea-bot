// utils/logger.js
import chalk from 'chalk';

export const logger = (message, level = 'info', details = '') => {
    switch (level) {
        case 'info':
            console.log(chalk.blue(`[INFO]: ${message}`));
            break;
        case 'success':
            console.log(chalk.green(`[SUCCESS]: ${message}`));
            break;
        case 'error':
            console.log(chalk.red(`[ERROR]: ${message}`));
            if (details) {
                console.log(chalk.red(`Details: ${details}`));
            }
            break;
        case 'warning':
            console.log(chalk.yellow(`[WARNING]: ${message}`));
            break;
        default:
            console.log(chalk.white(`[LOG]: ${message}`));
            break;
    }
};
