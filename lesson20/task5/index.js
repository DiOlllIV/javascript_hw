class User {
    constructor(id, name, sessionId) {
        this._id = id;
        this._name = name;
        this._sessionId = sessionId;
    };

    get id() {
        return this._id;
    };
    get name() {
        return this._name;
    };
    get sessionId() {
        return this._sessionId;
    }

};


class UserRepository {
    constructor(users) {
        this._users = Object.freeze(users)
    };
    get users() {
        return this._users;
    }

    getUserNames() {
        return this.users.filter(key => key._name);
    };

    getUserIds() {
        return this.users.filter(key => key._id);
    };

    getUserNameById(id) {

        for (let user of this._users) {
            if (user.id === this._id)
                return this._name;
        }
    };

}



export { User, UserRepository }