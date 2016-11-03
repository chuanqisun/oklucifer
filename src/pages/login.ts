import { By, until, webdriver, driver, accountManager, routes, logger } from '../utils/index';

export class LoginPage {
    private static loginTimeout = 3000;
    private static usernameId = 'login_username';
    private static passwordId = 'login_password';
    private static signInButtonId = 'sign_in_button';
    private static homePageId = 'p_home';

    public static login(): webdriver.promise.Promise<{}> {
        const sessionUser = accountManager.getSessionAccount();
        logger.info('start login for', sessionUser.username);

        driver.get(routes.home.login.route);
        driver.findElement(By.id(this.usernameId)).sendKeys(sessionUser.username);
        driver.findElement(By.id(this.passwordId)).sendKeys(sessionUser.password);
        driver.findElement(By.id(this.signInButtonId)).click();
        
        return driver.wait(until.elementsLocated(By.id(this.homePageId)), this.loginTimeout).then(() => {
            logger.success('logged in as', sessionUser.username);
        }).catch(() => {
            logger.error('login failed for', sessionUser.username);
        });
    }
}