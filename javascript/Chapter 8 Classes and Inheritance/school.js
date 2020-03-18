class School {
    constructor(name, level) {
        const validLevels = ['primary', 'middle', 'high'];
        //first validate the level
        if(!validLevels.includes(level)) {
            throw "Invalid school type";
        }
        this._name = name;
        this._level = level;
        this._studentCount = 0;
    }

    get name() {
        return this._name;
    }

    get level() {
        return this._level;
    }

    get studentCount() {
        return this._studentCount;
    }

    set studentCount(num) {
        this._studentCount;
    }

}

class Primary extends School {

}

class Middle extends School {

}

class High extends School {

}
