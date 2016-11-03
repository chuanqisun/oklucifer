import { By, until, webdriver, driver, accountManager, routes, logger } from '../utils/index';

const loginTimeout = 3000;
const usernameId = 'login_username';
const passwordId = 'login_password';
const signInButtonId = 'sign_in_button';
const homePageId = 'p_home';

function login(): webdriver.promise.Promise<{}> {
    const sessionUser = accountManager.getSessionAccount();
    logger.info('start login for', sessionUser.username);

    driver.get(routes.home.login.route);
    driver.findElement(By.id(usernameId)).sendKeys(sessionUser.username);
    driver.findElement(By.id(passwordId)).sendKeys(sessionUser.password);
    driver.findElement(By.id(signInButtonId)).click();
    
    return driver.wait(until.elementsLocated(By.id(homePageId)), loginTimeout).then(() => {
        logger.success('logged in as', sessionUser.username);
    }).catch(() => {
        logger.error('login failed for', sessionUser.username);
    });
}

export let loginPage = {
    login: login
}