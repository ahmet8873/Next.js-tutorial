import Link from "next/link";
import ProductCard from "./components/ProductCard";
export default function Home() {
  return (
    <main>
      Home Page
      <ul>
        <li>
          {" "}
          <Link href="/users">Users</Link>
        </li>
        <li>
          <Link href="/users/new">New User</Link>
        </li>
      </ul>
      <ProductCard></ProductCard>
    </main>
  );
}
