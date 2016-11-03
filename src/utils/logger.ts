import { driver } from './index';
import * as chalk from 'chalk';

const successStamp = chalk.green('[ • ]');
const infoStamp = chalk.blue('[ i ]');
const errorStamp = chalk.red('[ x ]');

function timestamp(): string {
    let time = new Date();
    let timeString = time.toLocaleTimeString();
    let dateString = time.toLocaleDateString();

    return chalk.grey(dateString + ' ' + timeString);
}

function log(...segments: string[]): webdriver.promise.Promise<void> {
    return driver.call(() => {
        console.log(segments.join(' '));
    });
}

function success(...message: string[]): webdriver.promise.Promise<void> {
    return log(successStamp, timestamp(), message.join(' '));
}

function info(...message: string[]): webdriver.promise.Promise<void> {
    return log(infoStamp, timestamp(), message.join(' '));
} 

function error(...message: string[]): webdriver.promise.Promise<void> {
    return log(errorStamp, timestamp(), message.join(' '));    
}

export const logger = {
    success: success,
    info: info,
    error: error
} 