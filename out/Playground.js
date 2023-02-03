class Super {
    static writePath() {
        const constructor = this;
        if (constructor.path !== undefined) {
            console.log(`the path is ${constructor.path}`);
        }
        else {
            console.log(`the class has no path, use the default one`);
        }
    }
}
class Sub extends Super {
}
Sub.path = "/person";
Sub.writePath();
//# sourceMappingURL=Playground.js.map