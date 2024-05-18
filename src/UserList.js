export function UserList({ users }) {
  const renderUsers = users.map((user) => {
    return (
      <tr key={user.username}>
        <td>{user.username}</td>
        <td>{user.email}</td>
      </tr>
    );
  });

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>{renderUsers}</tbody>
    </table>
  );
}

export default UserList;
