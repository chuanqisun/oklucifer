import { By, until, webdriver } from '../utils/webdriver-static';
import { driver } from '../utils/driver';
import { accountManager } from '../utils/account';
import { routes } from '../utils/routes';

const loginTimeout = 3000;
const usernameId = 'login_username';
const passwordId = 'login_password';
const signInButtonId = 'sign_in_button';
const homePageId = 'p_home';

export let login = (): webdriver.promise.Promise<{}> => {
    let taskPromise = webdriver.promise.defer();
    let sessionUser = accountManager.getSessionUser()
    driver.get(routes.loginRoute);
    driver.findElement(By.id(usernameId)).sendKeys(sessionUser.username);
    driver.findElement(By.id(passwordId)).sendKeys(sessionUser.password);
    driver.findElement(By.id(signInButtonId)).click();
    driver.wait(until.elementsLocated(By.id(homePageId)), loginTimeout).then(() => {
        console.log("logged in as " + sessionUser.username);
        taskPromise.fulfill();
    }, () => {
        console.error("log in failed for " + sessionUser.username);
        taskPromise.reject();
    });

    return taskPromise.promise;
}