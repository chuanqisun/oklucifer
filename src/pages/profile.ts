import { Webdriver, Driver, Routes, Url, Logger } from '../utils/index';

export class ProfilePage {
    private static questionComparisonId = 'question_comparison';
    private static theirsCountClass = 'theirs';
    public static viewQuestions(username: string): webdriver.promise.Promise<void> {
        const questionsUrl = Url.format(Routes.home.profile.user.questions.route, username);
        const driver = Driver.driver;
        const By = Webdriver.By;

        Logger.info('start retrieving questions for',  username, 'at', questionsUrl);

        driver.get(questionsUrl);

        const questionComparison = driver.findElement(By.id(this.questionComparisonId));
        return questionComparison.findElement(By.className(this.theirsCountClass)).getText().then((count) => {
            Logger.success(count, 'questions found for user', username);
        });
    }

    public static scanQuestions(): void {
        const driver = Driver.driver;
        const By = Webdriver.By;
        driver.findElements(By.css('[id^=question_]')).then( (questions)=> {
            
        });
    }
}