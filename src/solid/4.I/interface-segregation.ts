interface CanFly {
    fly(): void;
}

interface CanEat {
    eat(): void;
}

interface CanRun {
    run(): void;
}

interface CanSwim {
    swim(): void;
}

class Tucan implements CanFly, CanEat, CanRun {

    public fly() {}

    public eat() {}

    public run() {}
}

class Humminbird implements CanFly, CanEat {

    public fly() {}

    public eat() {}

}

class Ostrich implements CanEat, CanRun {

    eat(): void {
        
    }
    run(): void {
        
    }
}

class Penguin implements CanSwim, CanEat, CanRun {
    eat(): void {
        
    }
    run(): void {

    }  
    swim(): void {

    }  
}