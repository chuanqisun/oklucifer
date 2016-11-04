import { Driver } from './index';
import * as chalk from 'chalk';

export class Logger {
    private static driver = Driver.driver;
    private static successStamp = chalk.green('[ • ]');
    private static infoStamp = chalk.blue('[ i ]');
    private static errorStamp = chalk.red('[ x ]');

    public static success(...message: string[]): webdriver.promise.Promise<void> {
        return Logger.driver.call(() => {
            Logger.log(Logger.successStamp, Logger.timestamp(), message.join(' '));
        });
    }

    public static info(...message: string[]): webdriver.promise.Promise<void> {
        return Logger.driver.call(() => {
            Logger.log(Logger.infoStamp, Logger.timestamp(), message.join(' '));
        });
    } 

    public static error(...message: string[]): webdriver.promise.Promise<void> {
        return Logger.driver.call(() => {
            Logger.log(Logger.errorStamp, Logger.timestamp(), message.join(' '));
        });
    }

    private static log(...segments: string[]): void {
        console.log(segments.join(' '));
    }

    private static timestamp(): string {
        let time = new Date();
        let timeString = time.toLocaleTimeString();
        let dateString = time.toLocaleDateString();

        return chalk.grey(dateString + ' ' + timeString);
    }
} 