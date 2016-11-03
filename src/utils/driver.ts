import { webdriver } from './webdriver-static';
export const driver = new webdriver.Builder()
    .forBrowser('chrome')
    .build();