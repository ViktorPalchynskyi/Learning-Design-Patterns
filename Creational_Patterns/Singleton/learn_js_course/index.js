export const UserService = Object.freeze({
    currentUser: null,

    setUser() {},
});

const instanseMap = new Map();

class Singleton {
    constructor(provideIn) {
        if (instanseMap.has(provideIn)) {
            return instanseMap.get(provideIn);
        }

        instanseMap.set(provideIn, this);
    }

    getInstance(provideIn) {
        return instanseMap.get(provideIn);
    }
}
