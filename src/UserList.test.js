import { render, screen, within } from "@testing-library/react";
import UserList from "./UserList";

// not using function
// beforeEach(() => {
//   render(<UserList users={users} />);
// });

function renderComponent() {
  //   FOR TESTING PURPOSE - MAKING A FAKE DATABASE FOR NEW USER
  const users = [
    {
      username: "jane",
      email: "jane@example.com",
    },
    {
      username: "shah",
      email: "shah@example.com",
    },
  ];
  //// 1. RENDER THE COMPONENT BY TAKING DATA ////
  render(<UserList users={users} />);

  return { users };
}

test("renders correctly one row per user", () => {
  //// 1. RENDER THE COMPONENT BY TAKING DATA ////
  renderComponent();

  // destructuring container (div)- html element which automatically added in the playground URL
  // const { container } = render(<UserList users={users} />);

  //  2.  FIND ALL THE ROW OF THE TABLE//// dont use too much time to find the selection;
  //  we need to take a look at the render output of the component and attend
  //  to find all

  // if we don't know what function (getByRole()) we will use to find
  // /// screen.logTestingPlaygroundURL() ////////
  // to select the row - inline style - in <tr> style = " border: 10px solid red; display: block;"

  // eslint-disable-next-line testing-library/no-debugging-utils
  // screen.logTestingPlaygroundURL();

  // const rows = screen.getAllByRole("row");

  //  if test is fail because of extra rows-use two tricks - to make a specific
  // A //. Fallback: data-testid
  const rows = within(screen.getByTestId("users")).getAllByRole("row");

  // B //. Fallback: container.querySelector()
  // Test purpose to check = const table = container.querySelector("table");
  // console.log(table);

  // eslint-disable-next-line
  // const rows = container.querySelectorAll("tbody tr");

  //  3. ASSERTION - CORRECT NUMBER OF ROWS IN THE TABLE
  expect(rows).toHaveLength(2);
});

test("render the email and name of each user", () => {
  //// 1. RENDER THE COMPONENT BY TAKING DATA ////
  const { users } = renderComponent();
  //  2.  FIND ALL THE ROW OF THE TABLE//// don't use too much time to find the selection;
  //  we need to take a look at the render output of the component and attend
  //  to find all

  // if we don't know what function (getByRole()) we will use to find
  // /// screen.logTesttingPlaygroundURL() ////////
  // screen.logTestingPlaygroundURL();

  for (let user of users) {
    const name = screen.getByRole("cell", { name: user.username });
    const email = screen.getByRole("cell", { name: user.email });

    expect(name).toBeInTheDocument();
    expect(email).toBeInTheDocument();
  }
});
