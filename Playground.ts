import { repeat } from "./core/repeat";

namespace Playground {
  class ValueContainer<T> {
    constructor(readonly value: T) {}
  }

  const valueContainer = new ValueContainer(123)
  valueContainer.value
}
