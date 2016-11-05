export class Routes {
    public static get home() {
        return { 
            route: 'https://www.okcupid.com',
            login: {
                route: 'https://www.okcupid.com/login'
            },
            profile: {
                route: 'https://www.okcupid.com/login/profile',
                user: {
                    route: 'https://www.okcupid.com/login/profile/{0}',
                    questions: {
                        route: 'https://www.okcupid.com/profile/{0}/questions',
                        questionSegment: {
                            route: 'https://www.okcupid.com/profile/{0}/questions?low={1}'
                        }
                    }
                }
            }
        };
    }
}