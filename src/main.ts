import 'chromedriver';
import { Driver } from './utils/index';
import { LoginPage, ProfilePage } from './pages/index';

Driver.driver.manage().timeouts().setScriptTimeout(3000);

LoginPage.login();
ProfilePage.openQuestionsPage('Megs1370');
ProfilePage.iterateQuestionSegments('Megs1370');
// todo, build robust loggin util that has color output
// todo, build robust navigation util that "ensures" a login page, or "ensures" a homepage
// todo, prototype an answering machine
// todo, convert all files into typescript classes and try importing webdriver from index again in driver.ts