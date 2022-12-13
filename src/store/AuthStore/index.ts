import {computed, makeObservable, observable} from "mobx";

export class AuthStore {
    userName:string|null = null

    constructor () {
        makeObservable(this, {
          userName: observable,
            isAuth: computed,
        });
    }

    private setUserName = (name:string) => {
        this.userName = name
    }

    setUser = (user:{"name":string}) => {
        this.setUserName(user["name"])
    }

    get isAuth ():boolean {
        return Boolean(this.userName)
    }

}
