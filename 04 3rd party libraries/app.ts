/**
 * 3rd Party Libraries
 * 
 * Using 3rd party libraries with TypeScript:
 * Some 3rd party libraries only available for JavaScript. This would mean there is no support by TypeScript e.g. for code completion. There is no way to import them by *import*.
 * Instead function *require* has to be used.
 * To use them anyway in TypeScript for common libraries there is an additional *@types* package. This package contains <name>.d.ts files. 
 * These files contain the classes, methods, functions, properties, which can be accessed in a type safe way.
 * Just install the corresponding library like *npm install --save @types/<name>*.
 */