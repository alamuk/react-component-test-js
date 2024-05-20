import { useState } from "react";

export function UserForm({ onUserAdd }) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");

  function handleSubmit(evt) {
    evt.preventDefault();
    // console.log(username, email);
    onUserAdd({ email, username });

    setUsername("");
    setEmail("");
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
        <label htmlFor="email">Enter Email</label>
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
