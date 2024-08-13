import Link from "next/link";

export default function HeadphonesLayout({ children }) {
  return (
    <div>
      <Link href='/' prefetch={false}>
        Main page
      </Link>
      {children}
    </div>
  );
}
