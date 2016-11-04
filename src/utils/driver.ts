import { Webdriver } from './webdriver-static';

export class Driver {
    private static driverInstance: webdriver.WebDriver = undefined;

    public static get driver() {
        if (Driver.driverInstance === undefined ) {
            Driver.driverInstance = new Webdriver.webdriver.Builder()
            .forBrowser('chrome')
            .build();
        }

        return Driver.driverInstance;
    }
}