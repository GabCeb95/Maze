
class Observable {
    constructor() {
        this.observers = [];
        this.changed = false;
    }

    setChanged() {
        this.changed = true;
    }

    hasChanged() {
        return this.changed;
    }

    addObserver(obs) {
        this.observers.push(obs);
        this.setChanged();
        this.notifyObservers();
    }

    notifyObservers() {
        if (this.hasChanged())
            this.observers.forEach(e => e.update());
    }
}
