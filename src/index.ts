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

    this.tearDown();
  }

  tearDown() {}
}

// WasRun is a helper class to test the test framework
class WasRun extends TestCase {
  public log: string | undefined;

  override setUp() {
    this.log = 'setUp ';
  }

  testMethod() {
    this.log += 'testMethod ';
  }

  override tearDown() {
    this.log += 'tearDown ';
  }
}

// TestCaseTest defines the tests for the test framework
class TestCaseTest extends TestCase {
  testTemplateMethod() {
    const test = new WasRun('testMethod');
    test.run();
    assert(test.log === 'setUp testMethod tearDown ');
  }
}

// Run the tests
const test = new TestCaseTest('testTemplateMethod');
test.run();
