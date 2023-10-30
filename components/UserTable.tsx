import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../module/userSlice";
import { AppDispatch, RootState } from "@/redux/store";
import { User } from "../model/User";
export default function UserTable() {
  const user = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);
  return (
    <>
      {user.isLoading && <div>Chargement...</div>}
      {!user.isLoading && user.error ? <div>Error : {user.error}</div> : null}
      {!user.isLoading && (
        <table className="table">
          <thead className="thead">
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Street Adresse</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {user.users.map((user: User, index) => (
              <tr key={index}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.address.street}</td>
                <td>
                  <button>Action 1</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </>
  );
}
