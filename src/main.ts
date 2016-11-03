import 'chromedriver';

import { loginPage, profilePage } from './pages/index';

loginPage.login();
profilePage.viewQuestions('aeliseslp');
// todo, build robust loggin util that has color output
// todo, build robust navigation util that "ensures" a login page, or "ensures" a homepage
// todo, prototype an answering machine