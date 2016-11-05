import { Driver } from  './driver';

export class Native {
    public static getTotalQuestionsCount(): webdriver.promise.Promise<number> {
        const driver = Driver.driver;
        return driver.executeAsyncScript(() => {
            let callback = arguments[arguments.length - 1];
            callback((<any>window).ProfileQuestions.questionsLoaded);
        });
    }

    public static getQuestionsOnPage(): webdriver.promise.Promise<any[]> {
        const driver = Driver.driver;
        return driver.executeAsyncScript(() => {
            let callback = arguments[arguments.length - 1];
            callback((<any>window).ProfileQuestions.questions);
        });
    }

    public static getProfileQuestions(): webdriver.promise.Promise<any[]> {
        const driver = Driver.driver;
        return driver.executeAsyncScript(() => {
            let callback = arguments[arguments.length - 1];
            callback((<any>window).ProfileQuestions);
        });
    }

    public static answer(params: any): webdriver.promise.Promise<any> {
        let flatParams = Object.keys(params).map(function(key) {
            return encodeURIComponent(key) + '=' +
                encodeURIComponent(params[key]);
        }).join('&');

        const driver = Driver.driver;
        return driver.executeAsyncScript(function(flatParams: any) {
            var callback = arguments[arguments.length - 1];
            var xhr = new XMLHttpRequest();
            xhr.open("POST", "/questions/ask", true);
            xhr.onreadystatechange = function() {
                if (xhr.readyState == 4) {
                    callback(JSON.parse(xhr.responseText));
                }
            };
            xhr.send(flatParams);
        }, flatParams)
    }
}