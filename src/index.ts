/* eslint-disable @typescript-eslint/lines-between-class-members */
/* eslint-disable max-classes-per-file */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable no-prototype-builtins */
/* eslint-disable class-methods-use-this */
/* eslint-disable no-console */

import assert from 'assert';

class TestResult {
  public runCount: number;

  constructor() {
    this.runCount = 0;
  }

  testStarted() {
    this.runCount += 1;
  }

  summary() {
    return `${this.runCount} run, 0 failed`;
  }
}

// TestCase is our test framework
class TestCase {
  constructor(public name: string) {}

  setUp() {}

  run() {
    this.setUp();
    const result = new TestResult();
    result.testStarted();

    // @ts-ignore: I know what im doing
    if (this[this.name] instanceof Function) {
      // @ts-ignore: I really know what im doing
      this[this.name]();
    }

    this.tearDown();

    return result;
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

  // testBrokenMethod() {
  //   throw new Error('This is a broken method');
  // }

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

  testResult() {
    const test = new WasRun('testMethod');
    const result = test.run();
    assert(result.summary() === '1 run, 0 failed');
  }

  // testFailedResult() {
  //   const test = new WasRun('testBrokenMethod');
  //   const result = test.run();
  //   assert(result.summary() === '1 run, 1 failed');
  // }
}

// Run the tests
const test = new TestCaseTest('testTemplateMethod');
test.run();

const test2 = new TestCaseTest('testResult');
test2.run();

// const test3 = new TestCaseTest('testFailedResult');
// test3.run();
