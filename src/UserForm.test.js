import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import UserForm from "./UserForm";

////// 3 steps in the test() we need to do://////
// 1. render the component - with props if it has any
// 2. manipulate the component and find the element in it
//    find/ select the element which we are going to test
//  3 make an Assertion - make sure the component what we expect it to do
// 4. Commands Line-start the server - npm start
// 5. Run all test in the commands Line - npm run test

// // select the item:
// Note: ARIA ROLE System, screen reader OBJECT, screen reader software, what role have of the item,
// role system works to find the element which render by our component.

//  Assertion :
// 1.
// expect() function - its is a global variable
// we always pass some value here

// 2. matcher() function - it going to look at the value we passed in and make sure some property or attribute
// of it is equal to may be something we provide or just make sure that value we provided is present/ exist /
// other variety of checks
//  it coming from Jest library nad React Testing library

//// Simulate/pretend
// MOKE FUNCTION
// Note::: -  mock() function is for calling another function which got by component as a props
// mock means - not real - fake function that does not do anything
// its record whenever it get called, and arguments it was called with it.

//  brittle test = breakable test.

test("it shows two import and a button", () => {
  // 1. render the component
  render(<UserForm />);

  // 2. manipulate the component and find the element in it
  //    find/ select the element which we are going to test

  const inputs = screen.getAllByRole("textbox");
  const button = screen.getByRole("button");

  //  3 make an Assertion - make sure the component what we expect it to do
  expect(inputs).toHaveLength(2);
  expect(button).toBeInTheDocument();
});

test("it calls onUserAdd when the form submitted", () => {
  //     NOT THE BEST WAY IMPLEMENTATION
  // const argList = [];
  // const callback = (...args) => {
  //   argList.push(args);
  // };

  //   BETTER WAY IMPLEMENTATION

  const mock = jest.fn();

  //     STEPS OF WORKING:
  // 1.    Render my component
  render(<UserForm onUserAdd={mock} />);

  //  2.   Find my input
  //    check-is it brittle input?
  // const inputs = screen.getAllByRole("textbox");
  //   destructuring input
  // const [nameInput, emailInput] = screen.getAllByRole("textbox");

  const nameInput = screen.getByRole("textbox", { name: /name/i });
  const emailInput = screen.getByRole("textbox", { name: /email/i });

  //   3.  Simulate typing in a name
  user.click(nameInput);
  user.keyboard("jane");

  //   4.  Simulate/pretend typing in an email
  user.click(emailInput);
  user.keyboard("jane@test.com");

  //  5.   Find the button
  const button = screen.getByRole("button");

  //  6.   Simulate/limited user by clicking the button to submit the form
  user.click(button);

  //  7. Assertion - to make sure 'onUserAdd' gets called with 'email/name'

  // expect(argList).toHaveLength(1);
  // expect(argList[0][0]).toEqual({ username: "jane", email: "jane@test.com" });

  //     ASSERTION WITH MOCK()
  expect(mock).toHaveBeenCalled();
  expect(mock).toHaveBeenCalledWith({
    username: "jane",
    email: "jane@test.com",
  });
});

test("empty two input when the form is submitted", () => {
  render(<UserForm onUserAdd={() => {}} />);

  const nameInput = screen.getByRole("textbox", { name: /name/i });
  const emailInput = screen.getByRole("textbox", { name: /email/i });

  const button = screen.getByRole("button");

  user.click(nameInput);
  user.keyboard("jane");

  user.click(emailInput);
  user.keyboard("jane@test.com");

  user.click(button);

  expect(nameInput).toHaveValue("");
  expect(emailInput).toHaveValue("");
});
