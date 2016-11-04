import * as webdriver from 'selenium-webdriver';

export class Webdriver {
    public static webdriver = webdriver;
    public static By = webdriver.By;
    public static until = webdriver.until;
}