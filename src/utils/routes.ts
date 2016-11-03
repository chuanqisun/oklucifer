const home = {
    route: 'https://www.okcupid.com',
    login: {
        route: 'https://www.okcupid.com/login'
    },
    profile: {
        route: 'https://www.okcupid.com/login/profile',
        user: {
            route: 'https://www.okcupid.com/login/profile/{0}',
            questions: {
                route: 'https://www.okcupid.com/profile/{0}/questions'
            }
        }
    }
}

export let routes = {
    home: home
}