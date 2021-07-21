# Typescript-ifying a React Component

An interactive tutorial to guide you through converting your first React component to Typescript.

## Getting Started

1. Clone this repository to your local machine: `git clone git@github.com:louiseswift/first-typescript-component.git`
2. Navigate into the cloned repository: `cd first-typescript-component`
3. Open up the `CourseHeader.jsx` React component file in your preferred text editor
4. Notice (but don't open) `reference/CourseHeader.tsx` - this is a completed example available as a reference if you are having any troubles during the tutorial

## Useful Preparation

It is very helpful to have the TypeScript CLI installed so that you can locally check whether your TypeScript code compiles.

If your code contains a type-related error, the TypeScript CLI will warn you.

(You may find that your text editor is also able to highlight type-related errors in any files that you have open. But the CLI will check _all_ files, potentially catching issues you weren't aware of.)

1. Notice that the `package.json` file in this project references both the `typescript` and the `tsc` packages
2. Run `yarn install` from the project directory to install these packages locally
3. Notice that `tsconfig.json` contains some configuration options for how we want our type-checking to be done - check [the documentation](https://www.typescriptlang.org/docs/handbook/compiler-options.html) to understand what these options do
4. Run `yarn run tsc` in the project directory now, to see an error about no `.ts` or `.tsx` files being found - this is expected, of course, so plan to re-run this command once you've completed Step 1 below

## The Typescript-ification

<!-- TODO: install futurelearn/design-system package correctly -->

1. Change the filename of `CourseHeader.jsx` to `CourseHeader.tsx`
2. Run `yarn run tsc` (see "Useful Preparation", above) to see the reported type-checking errors - you can repeat this command regularly as you progress through the steps below to track your progress in fixing these errors
3. Begin to declare a type for this component's props, below the import statements in `CourseHeader.tsx`:
   ```typescript
   type Props = {
     code: string;
   };
   ```
4. Use the other primitive types (`string`, `number` and `boolean`) to complete the `Props` type declaration that you started in the previous step, using the existing `CourseHeader.propTypes = { ... }` declaration to guide your type choices (note: some props will be optional - [documentation here](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#optional-properties))
5. Assign the `Props` type to the props received by the component function as follows:

   ```typescript
   // BEFORE
   const CourseHeader = ({ /* destructured props */ }) => { /* function body */ };

   // AFTER
   const CourseHeader = ({ /* destructured props */ }: Props) => { /* function body */ };
   ```

6. Remove the entire `CourseHeader.propTypes = { ... }` declaration from `CourseHeader.tsx`
7. Remove the `PropTypes` import from `CourseHeader.tsx`
8. Declare a type (an array of string values) for the value stored in the `runDetails` variable - [documentation here](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#arrays)
9. Review our TypeScript GitBook page [here](https://app.gitbook.com/@futurelearn/s/coding-standards/languages-and-frameworks/javascript-typescript/typescript#prefer-t-to-array-less-than-t-greater-than) to see whether the syntax you used to declare the array type in the previous step matches our generally-preferred choice
