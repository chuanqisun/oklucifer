import { By, until, webdriver, driver, routes, url, logger } from '../utils/index';

const questionComparisonId = 'question_comparison';
const theirsCountClass= 'theirs';

function viewQuestions(username: string): webdriver.promise.Promise<void> {
    const questionsUrl = url.format(routes.home.profile.user.questions.route, username);
    logger.info('start retrieving questions for',  username, 'at', questionsUrl);

    driver.get(questionsUrl);

    const questionComparison = driver.findElement(By.id(questionComparisonId));
    return questionComparison.findElement(By.className(theirsCountClass)).getText().then((count) => {
        logger.success(count, 'questions found for user', username);
    });
}

export let profilePage = {
    viewQuestions: viewQuestions
}