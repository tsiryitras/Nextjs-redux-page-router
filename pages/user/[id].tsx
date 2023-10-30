import CardUser from "@/components/CardUser";
import { User } from "@/model/User";
import { AppDispatch, RootState } from "@/redux/store";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserById } from "../../module/userSlice";
import { useEffect } from "react";

export default function BlogView() {
  const router = useRouter();
  const user = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch<AppDispatch>();
  const userId = router.query.id;

  useEffect(() => {
    dispatch(fetchUserById(userId));
  }, []);

  return (
    <div>
      Blog N°{}
      <section className="section">
        <CardUser user={user.name} />
      </section>
    </div>
  );
}
