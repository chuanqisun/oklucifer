let directory = require('../../test-accounts.json');

export interface IAccount {
    username: string;
    password: string;
}

export interface IAccountManager {
    getSessionUser: () => IAccount;
}

const accounts: IAccount[] = directory.accounts;

export let accountManager: IAccountManager = {
    getSessionUser: () => accounts[0]
}