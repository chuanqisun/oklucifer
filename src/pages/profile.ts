import { By, until, webdriver, driver, routes, url, logger } from '../utils/index';

export class ProfilePage {
    private static questionComparisonId = 'question_comparison';
    private static theirsCountClass = 'theirs';
    public static viewQuestions(username: string): webdriver.promise.Promise<void> {
        const questionsUrl = url.format(routes.home.profile.user.questions.route, username);
        logger.info('start retrieving questions for',  username, 'at', questionsUrl);

        driver.get(questionsUrl);

        const questionComparison = driver.findElement(By.id(this.questionComparisonId));
        return questionComparison.findElement(By.className(this.theirsCountClass)).getText().then((count) => {
            logger.success(count, 'questions found for user', username);
        });
    }
}