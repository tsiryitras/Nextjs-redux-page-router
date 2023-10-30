import { User } from "@/model/User";

export default function CardUser(user: User) {
  return (
    <div className="card">
      <div className="card-header">
        <h4>User Info</h4>
      </div>
      <div className="card-body">
        <div className="item">
          <span className="label">Name: </span>
          <span>{user.name}</span>
        </div>
        <div className="item">
          <span className="label">Username: </span>
          <span>{user.username}</span>
        </div>
        <div className="item">
          <span className="label">Email: </span>
          <span>{user.email}</span>
        </div>
      </div>
    </div>
  );
}
