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

    quickFacts() {

    }

    static pickSub() {

    }

}

class Primary extends School {
    constructor(name, level) {
        super(name, level) {
            this._pickupPolicy = "Standard as recommended by city DOHHS";
        }
        get pickupPolicy() {
            return this._pickupPolicy;
        }

        set pickupPolicy() {
            this._pickupPolicy;
        }
    }

}

class Middle extends School {
    constructor(name, level) {
        super(name, level);
    }
}

class High extends School {
    constructor(name, level) {
        super(name, level) {
            this._sportsTeams = "Standard as recommended by city DOHHS";
        }
        get pickupPolicy() {
            return this._sportsTeams;
        }

        set pickupPolicy() {
            this._sportsTeams;
        }
    }
}
