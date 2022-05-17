# Skyalert Typescript Scaffolding

Clone this project to jump-start a TS project. It contains tools and configurations for TDD best practices, so that your environment can give you instant feedback on your work.

# Included in the box

- **typescript:** used to transpile your code into JS.
- **ts-node:** typeScript execution engine and REPL for Node.js.
- **jest:** unit testing
- **eslint:** code style enforcement
- **prettier:** code formatting enforcement
- **typedoc:** automatic doc generation
- **husky:** git hooks

# Available scripts

- `yarn start` - run your application and watch for changes
- `test` - run all tests
- `test-watch` - jest interactive terminal
- `lint` - check for style errors and warnings
- `clean` - delete `./dist` folder
- `build` - transpile into `./dist` folder
- `build-all` - check for style errors, delete `./dist` and build

# Installation

1. Download/clone this repo
2. `yarn`
3. `yarn prepare`
4. Go to `package.json` and fill out the `name`, `description` and `author`
5. `git init`
6. `git add .`
7. `git commit -m "Scaffolding complete"`
8. Add a remote repository

# How to use

This is a walkthrough of the available tools.

## test-watch

1. Open a terminal window and run `yarn test-watch`.
2. All green? Good.
3. Open `src/index.test.ts`
4. At the end, write the following test:

```ts
describe('When multiplying two numbers', () => {
  it('should return the product', () => {
    expect(multiply(3, 5)).toBe(15);
  });
});
```

5. You can immediately see that `multiply(3,5)` is hightlighted as an error.
6. Save the file anyway.
7. Now your test fail with:

` src/index.test.ts:11:12 - error TS2304: Cannot find name 'multiply'.`

8. Now open `src/index.ts` and write an implementation:

```ts
export const multiply = (a: number, b: number): number => a * b;
```

9. Import your new function into the .test file

```ts
- import { sum } from './index';
+ import { sum, multiply } from './index';
```

10. Save both files and watch the test pass.

## eslint + prettier

11. Run `yarn lint` in your terminal. If nothing happens, you are good.
12. Run

```sh
echo "crappyCode(a, b) => a /b" >> src/index.ts
```

13. Run `yarn lint`. You'll see at least an error. (also in the `test-watch` terminal)
14. Fix it like so:

```ts
export const divide = (a: any, b: any) => a / b;
```

15. Run `yarn lint` again. You'll see it complains with a warning. Let's fix it:

```ts
export const divide = (a: number, b: number) => a / b;
```

## husky

16. Run

```sh
echo "export const subtract = (a: number, b: number) => { return a - b };
" >> src/index.ts
```

17. Try to commit this to the repo. If you followed the "Installation" section, it should fail.

18. Replace with:

```ts
export const subtract = (a: number, b: number) => a - b;
```

19. Commit (if you want, if not just run `yarn lint`). It should not produce an error.

## start

20. Run `yarn start`
21. Write:

```ts
const a = 6;
const b = 3;

console.log(sum(a, b));
```

22. Save and watch the terminal output. It should print `9`
23. Make a small change:

```ts
-console.log(sum(a, b));
+console.log(multiply(a, b));
```

24. Save and watch the terminal output. It should print `18`

## docs

25. Run `yarn docs`
26. Open `docs/index.html` in a web browser. Explore your new documentation.
27. In `src/index.ts` add:

```ts
/**
 * Calculates the square root of a number.
 *
 * @param x the number to calculate the root of.
 * @returns the square root if `x` is non-negative or `NaN` if `x` is negative.
 */
export const sqrt = (x: number): number => Math.sqrt(x);
```

28. Run `yarn docs` and reload your web browser. Explore the new function.

## develop

29. Just replace `index.ts` and `index.test.ts` and do as you please.
