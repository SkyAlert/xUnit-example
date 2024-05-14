// da code
export const sum = (a: number, b: number): number => a + b;

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
xTest.run('adds 1 + 2 to equal 3', () => {
  if (sum(1, 2) !== 3) {
    throw new Error('Test failed');
  }
});

xTest.run('adds 1 + 3 to equal 4', () => {
  if (sum(1, 3) !== 4) {
    throw new Error('Test failed');
  }
});
