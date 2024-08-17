const UserService = {
    userPermissions,
    getUser() {
        return {
            name: 'Viktor',
            age: 26,
        };
    },
    getUserPermissions() {},
};

const UserServiceWithCache = {
    userService: UserService,
    user,

    getUser() {
        if (!user) {
            user = this.userService.getUser();
        }

        return this.user;
    },
    getUserPermissions() {},
};

const userProxy = new Proxy(UserService, {
    get: (obj, property) => {
        obj[property];
    },
    set: (obj, property, value) => {
        obj[property] = value;
    },
});
