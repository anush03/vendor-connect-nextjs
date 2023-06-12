import { DefaultSession } from "next-auth";

export function UserCard(user) {
  return (
    <div className="card">
      <div className="card-body">
        <p>Current Logged In User</p>
        <h5 className="card-title">{user?.user?.name}</h5>
        <p className="card-text">{user?.user?.email}</p>
      </div>
    </div>
  );
}
