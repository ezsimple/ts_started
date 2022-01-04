{
  interface ClockConstructor {
    new (h: number, m: number): ClockInterface;
  }

  interface ClockInterface {
    tick(): void;
  }

  function createClock(
    ctor: ClockConstructor,
    h: number,
    m: number,
  ): ClockInterface {
    return new ctor(h, m);
  }

  class DigitalClock implements ClockInterface {
    constructor(h: number, m: number) {}
    tick() {
      console.log('beep beep');
    }
  }

  class AnalogClock implements ClockInterface {
    constructor(h: number, m: number) {}
    tick() {
      console.log('tick tock');
    }
  }

  const digital = createClock(DigitalClock, 12, 17);
  const analog = createClock(AnalogClock, 1, 18);
}
