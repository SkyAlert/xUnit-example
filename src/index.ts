import assert from 'assert';

// xUnit
const xTest = {
  run: (name: string, test: () => void) => {
    try {
      test();
      console.log(`✅ ${name}`);
    } catch (err) {
      console.log(`❌ ${name}`);
    }
  },
};

// Tests

xTest.run('Test did run', () => {
  let didRun = false;
  xTest.run('Dummy test', () => {
    didRun = true;
  });

  assert(didRun);
});
