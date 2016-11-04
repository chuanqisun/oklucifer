const directory: IDirectory = require('../../test-accounts.json');

export interface IDirectory {
    accounts: IAccount[];
}

export interface IAccount {
    username: string;
    password: string;
    email: string;
}

export class AccountManager {
    private static accounts = directory.accounts;
    public static getSessionAccount() {
        return AccountManager.accounts[0]
    }
}