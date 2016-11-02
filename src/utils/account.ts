const directory: IDirectory = require('../../test-accounts.json');
const accounts = directory.accounts;

export interface IDirectory {
    accounts: IAccount[];
}

export interface IAccount {
    username: string;
    password: string;
    email: string;
}

export interface IAccountManager {
    getSessionAccount: () => IAccount;
}

export let accountManager: IAccountManager = {
    getSessionAccount: () => accounts[0]
}