import { webdriver } from './webdriver-static';
export let driver = new webdriver.Builder()
    .forBrowser('chrome')
    .build();