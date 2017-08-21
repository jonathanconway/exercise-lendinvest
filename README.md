# LendInvest Exercise

Application customers use to manage their loans.

## Pre-requisites

* NPM

## Checkout & Install

```bash
git clone https://github.com/jonathanconway/exercise-lendinvest.git
cd ./exercise-lendinvest
npm install
```

## Run

```bash
npm start
```

## Test

```bash
npm test
```

## Assumptions

* `term_remaining` values are in seconds

* I did follow a red / green / refactor process.
  * However, sometimes this isn't apparent from looking at the commit history, as I did the full cycle before committing code.
    * I did a full cycle because I wanted all tests to pass on each commit, so that you could revert back to any commit at any time, and have passing tests.
    * I will be happy to point to examples in the code, where I did this, during the interview.

* I opted not to write tests for imported libraries, webpack configuration, style-related code, etc. I class these as configuration, and thus, don't necessarily see value in testing them.

* Styling
  * Chose styled-components for styling, for
    * Simplicity
    * "React-ness" (e.g. cohesion of style with markup, per-component)
  * Units are in rem, for cross-device/resolution consistency