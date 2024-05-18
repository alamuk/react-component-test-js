import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import UserForm from "./UserForm";

////// 3 steps in the test() we need to do://////
// 1. render the component - with props if it has any
// 2. manipulate the component and find the element in it
//    find/ select the element which we are going to test
//  3 make a Assertion - make sure the component what we expect it to do
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
//

test("it shows two import and a button", () => {
  // 1. render the component
  render(<UserForm />);

  // 2. manipulate the component and find the element in it
  //    find/ select the element which we are going to test

  const inputs = screen.getAllByRole("textbox");
  const button = screen.getByRole("button");

  //  3 make a Assertion - make sure the component what we expect it to do
  expect(inputs).toHaveLength(2);
  expect(button).toBeInTheDocument();
});
