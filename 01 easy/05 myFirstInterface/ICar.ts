/**
 * An instance of that interface represents a car
 * Use 'export' to provide the ability to import the interface in other files (see app.ts)
 */
export interface ICar {
  // defines a readonly property
  readonly name: String;
  start(): void;
}
