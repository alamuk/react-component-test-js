import { useState } from "react";

export function UserForm({ onUserAdd }) {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");

  function handleSubmit(evt) {
    evt.preventDefault();
    // console.log(username, email);
    onUserAdd({ email, username });
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name</label>
        <input
          id="name"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <button>Add User</button>
    </form>
  );
}

export default UserForm;
