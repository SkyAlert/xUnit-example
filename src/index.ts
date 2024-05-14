/* eslint-disable max-classes-per-file */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable no-prototype-builtins */
/* eslint-disable no-console */

import assert from 'assert';

class TestCase {
  constructor(public name: string) {}

  run() {
    // @ts-ignore: I know what im doing
    if (this[this.name] instanceof Function) {
      // @ts-ignore: I really know what im doing
      this[this.name]();
    }
  }
}

class WasRun extends TestCase {
  public wasRun: boolean;

  constructor(name: string) {
    super(name);
    this.wasRun = false;
  }

  testMethod() {
    this.wasRun = true;
  }
}

class TestCaseTest extends TestCase {
  // eslint-disable-next-line class-methods-use-this
  testRunning() {
    const myTest = new WasRun('testMethod');
    assert(!myTest.wasRun);
    myTest.run();
    assert(myTest.wasRun);
  }
}

const test = new TestCaseTest('testRunning');
test.run();
