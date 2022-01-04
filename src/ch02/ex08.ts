{
  interface ClockInterface {
    currentTime: Date;
    setTime(d: Date): void;
  }

  class Clock implements ClockInterface {
    currentTime: Date = new Date();
    constructor() {}

    setTime(d: Date): void {
      this.currentTime = d;
    }
  }

  interface ClockConstructor {
    new (d: number, m: number);
  }

  /**
   * TS2420: Class 'Clock2' incorrectly implements interface 'ClockConstructor'.
   * Type 'Clock2' provides no match for the signature 'new (d: number, m: number): any'.
   */
  // class Clock2 implements ClockConstructor {
  //   currentTime: Date;
  //   constructor (d: number, m: number) {
  //   }
  // }

}
