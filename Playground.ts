import { repeat } from "./core/repeat";

namespace Playground {
  enum MuscleGroup {
    ARMS,
    BACK,
    CORE,
    FULL_BODY,
    LEGS,
  }

  class Random {
    static next(range: number): number {
      return Math.floor(Math.random() * range) + 1;
    }
  }

  class RandomElement {
    private _pickedTimes = 0;

    constructor(
      readonly factor: number,
      readonly index: number,
      readonly numberElements: number,
      readonly randomList: RandomList,
      readonly predecessor?: RandomElement
    ) {}

    get min(): number {
      return this.predecessor ? this.predecessor.max + 1 : 1;
    }

    get max(): number {
      return this.min + this.probabilityValue - 1;
    }

    onPick() {
      this._pickedTimes++;
    }

    get pickedTimes(): number {
      return this._pickedTimes;
    }

    get probability(): number {
      // If the element wasn't picked yet, its probability is given from the probability list
      if (this.pickedTimes === 0) {
        return 0;
      }

      if (this.pickedTimes === 1) {
        return 10;
      }

      return 5;
    }

    get probabilityValue(): number {
      let probability = this.probability;
      if (probability === 0) {
        probability = randomList.elementProbability;
      }
      return (probability / 100) * this.factor;
    }
  }

  class RandomList {
    private pickedTimes = 0;
    private readonly factor = 1000;
    readonly elements: RandomElement[];

    constructor(private readonly numberElements: number) {
      this.elements = this.setupElements(numberElements);
    }

    pick(): RandomElement {
      this.pickedTimes++;
      if (this.pickedTimes > this.numberElements) {
        // Throw exception. The probability to pick an element is decreased with each pick.
        // As long as there are elements which are not picked yet, they share the rest of the probability.
        // But if the number of picks is greater than the number of elements, there is a chance, that each element was already picked and so the probability of each element is decreased.
        // This means finally we couldn't find any element.
        // Example: 5 elements, each was picked already, so each has now a probability of 10%. In sum 50%. This means for the last 50% we have to elements which cover these 50%.
        throw new Error(
          `Error while picking element. Number of picks must not be greater than the ${this.numberElements}, the number of elements.`
        );
      }
      const rangeValue = Random.next(this.factor);
      const element = this.findByRangeValue(rangeValue);
      element.onPick();
      return element;
    }

    get elementProbability(): number {
      // sum all probabilities
      // those who are not picked yet, have probability 0, count
      // count number elements with a probability
      let countElementsWithProbability = 0;
      let sumProbability = 0;

      this.elements.forEach((element) => {
        const probability = element.probability;
        if (probability > 0) {
          sumProbability += probability;
          countElementsWithProbability++;
        }
      });

      // Calculate probability for elements, which are not picked yet
      // Example: we have two picked elements. First has a probability of 10, second 5
      // so we have 15% for both rest is 85% for all other elements (number elements - element with probability)
      const countElementsWithoutProbability =
        this.numberElements - countElementsWithProbability;
      const probability =
        (100 - sumProbability) / countElementsWithoutProbability;
      return probability;
    }

    private findByRangeValue(rangeValue: number): RandomElement {
      for (const element of this.elements) {
        if (rangeValue >= element.min && rangeValue <= element.max) {
          return element;
        }
      }

      throw new Error(
        `No element found in range for range value ${rangeValue}`
      );
    }

    private setupElements(numberElements: number) {
      let predecessor: RandomElement | undefined = undefined;
      const elements: RandomElement[] = [];
      repeat(numberElements, (index) => {
        const element = new RandomElement(
          this.factor,
          index,
          numberElements,
          this,
          predecessor
        );
        predecessor = element;
        elements.push(element);
      });
      return elements;
    }
  }

  const randomList = new RandomList(5);

  repeat(4, () => {
    const element = randomList.pick();

    console.log(MuscleGroup[element.index]);

    // console.log(
    //   `Picked element is ${element.index} min: ${element.min} max: ${element.max} probability: ${element.probability} probabilityValue: ${element.probabilityValue} pickedTimes: ${element.pickedTimes}`
    // );
  });
}
