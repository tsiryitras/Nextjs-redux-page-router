import { useRouter } from "next/router";
export default function BlogView() {
  const router = useRouter();
  return <div>Blog N°{router.query.id}</div>;
}
