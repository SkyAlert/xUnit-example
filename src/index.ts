/* eslint-disable @typescript-eslint/lines-between-class-members */
/* eslint-disable max-classes-per-file */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable no-prototype-builtins */
/* eslint-disable class-methods-use-this */
/* eslint-disable no-console */

import assert from 'assert';

// TestCase is our test framework
class TestCase {
  constructor(public name: string) {}

  setUp() {}

  run() {
    this.setUp();

    // @ts-ignore: I know what im doing
    if (this[this.name] instanceof Function) {
      // @ts-ignore: I really know what im doing
      this[this.name]();
    }
  }
}

// WasRun is a helper class to test the test framework
class WasRun extends TestCase {
  public wasRun: boolean | undefined;
  public wasSetUp: boolean;

  constructor(name: string) {
    super(name);
    this.wasSetUp = false;
  }

  override setUp() {
    this.wasRun = false;
    this.wasSetUp = true;
  }

  testMethod() {
    this.wasRun = true;
  }
}

// TestCaseTest defines the tests for the test framework
class TestCaseTest extends TestCase {
  private test: WasRun | undefined;

  override setUp(): void {
    this.test = new WasRun('testMethod');
  }

  testSetUp() {
    assert(this.test);
    this.test.run();
    assert(this.test.wasSetUp);
  }

  testRunning() {
    assert(this.test);
    this.test.run();
    assert(this.test.wasRun);
  }
}

// Run the tests
const test = new TestCaseTest('testRunning');
test.run();

const test2 = new TestCaseTest('testSetUp');
test2.run();
