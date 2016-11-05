import { Webdriver, Driver, Routes, Url, Logger, Arithmetic, Native } from '../utils/index';

export class ProfilePage {
    private static questionComparisonId = 'question_comparison';
    private static theirsCountClass = 'theirs';

    public static openQuestionsPage(username: string): webdriver.promise.Promise<void> {
        const questionsUrl = Url.format(Routes.home.profile.user.questions.route, username);
        const driver = Driver.driver;
        Logger.info('open questions page for',  username, 'at', questionsUrl);
        driver.get(questionsUrl);
        return Logger.success('questions page opended for',  username);
    }

    public static iterateQuestionSegments(username: string): void {
        const driver = Driver.driver;
        const By = Webdriver.webdriver.By;

        Native.getTotalQuestionsCount().then((count) => {
            Logger.info(<any>count, 'questions found');
            let lowIndices = Arithmetic.paginate(count);
            for(let lowIndex of lowIndices) {
                ProfilePage.viewQuestionSegment(username, lowIndex);

                Native.getQuestionsOnPage().then((questions) => {
                    for (let [index, question] of questions.entries()) {
                        if (!question.answered) {
                            ProfilePage.answerQuestion(question);
                        }
                    }
                });
            }
        })
    }

    private static viewQuestionSegment(username: string, lowIndex: number) {
        const driver = Driver.driver;
        const segmentUrl = Url.format(Routes.home.profile.user.questions.questionSegment.route, username, lowIndex.toString());
        Logger.info("open question segment", segmentUrl);
        driver.get(segmentUrl);
        return Logger.success("question segment opened");
    }

    private static answerQuestion(question: any) {
        let answersDomain = question.answerOptions;
        let answersOptions: number[] = [];
        for (let key in answersDomain) {
            answersOptions.push(answersDomain[key].value);
        }

        let randomAnswer = answersOptions[Math.floor(Math.random() * answersOptions.length)];

        Native.getProfileQuestions().then((ProfileQuestions: any) => {
            let params = {
                version: question.version,
                ajax: 1,
                submit: 1,
                answer_question: 1,
                skip: 0,
                show_all: ProfileQuestions.showAll,
                targetid: ProfileQuestions.targetUserID,
                qid: question.qid,
                is_new: question.isNew ? 1 : 0,
                answers: randomAnswer,
                matchanswers: [randomAnswer],
                importance: 1,
                is_public: 1,
                note: '',
                delete_note: 0
            };

            Logger.info("will answer question", params.qid);
            return Native.answer(params).then((result) => {
                Logger.success("accepted. Mine (i, a, m):", result.viewer.importance, result.viewer.answer, (result.viewer.match_answers >>> 0).toString(2), "target:", result.target.importance, result.target.answer, (result.target.match_answers >>> 0).toString(2));
            }).catch(() => {
                Logger.error("answer rejected");
            });
        });
    }
}