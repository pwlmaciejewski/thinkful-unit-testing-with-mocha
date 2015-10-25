# Unit testing with Mocha

"[Unit testing with Mocha](https://open-sessions.thinkful.com/workshops/unit-testing-with-mocha-and-assert-510/)" workshop @ [Thinkful](http://thinkful.com)

## Installation

To setup the project you need to change [Node.js](https://nodejs.org/) installed on your machine.

```sh
git clone git@github.com:pwlmaciejewski/thinkful-unit-testing-with-mocha.git
cd thinkful-unit-testing-with-mocha
npm install # install dependencies
```

Test if everything is ok:

```sh
npm test
```

You should get the following output:

```sh
  Store
    ✓ Does nothing


  1 passing (8ms)
```

## Agenda

* How to install and run Mocha
* How Mocha test cases works
* Use nested `describe` and `before` to DRY your code
* Asynchronous tests with Mocha
* How to use `skip` and `only` methods

## Materials

* Mocha's documentation: [https://mochajs.org/](https://mochajs.org/)
* Assert module: [https://nodejs.org/api/assert.html](https://nodejs.org/api/assert.html)
* FS module: [https://nodejs.org/api/fs.html](https://nodejs.org/api/fs.html)
* Chai assertion library: [http://chaijs.com/](http://chaijs.com/)
