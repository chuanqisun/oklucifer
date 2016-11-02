import 'chromedriver';
import { webdriver } from './utils/webdriver-static';
import { login } from './micro-tasks/login';

login();

// todo, build robust loggin util that has color output
// todo, build robust navigation util that "ensures" a login page, or "ensures" a homepage
// todo, prototype an answering machine