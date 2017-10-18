# Testing of group 31

In order to make useful frontend tests of the components we made snapshots tests as well testing whether some functions has been called. Additionally we tested a using a few different props and both `shallow` and `mount` returns.

In the ToDoForm we wrote a test that asserts that the `updateItem` method is called by mocking the function using jest functions.

In the TodoPage we wrote tests that state `value`'s actually was rendered and that the page does not crash when rendering without values.

By using both snapshots tests with varying props, as well as ensuring functions are called one should be quite satisfied with the test coverage of frontend components.

#### Components that are tested:

 * ToDoForm
 * ToDoPage
 * ClockContainer


In order to make testing work we used:
* Enzyme
	* enzyme-adapter-react-16
	* enzyme-to-json
* Jest
* JSDOM
* A localStorageMock class

Additionally we mocked out all static files like css and png's using an `assetsTransformer`.


Run tests using `npm test` which executes `NODE_ENV=test jest`. The node environment had to be set due to `semantic-ui` required it to not crash.
