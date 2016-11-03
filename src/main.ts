import 'chromedriver';

import { LoginPage, ProfilePage } from './pages/index';

LoginPage.login();
ProfilePage.viewQuestions('aeliseslp');
// todo, build robust loggin util that has color output
// todo, build robust navigation util that "ensures" a login page, or "ensures" a homepage
// todo, prototype an answering machine
// todo, convert all files into typescript classes and try importing webdriver from index again in driver.ts