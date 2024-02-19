import MaxWidthWrapper from "@/lib/MaxWidthWrapper";
import Link from "next/link";

export default function Home() {
  return (
    <MaxWidthWrapper>
      <main className="px-2 md:px-7 lg:px-14">
        <h1> hey devil</h1>
        <Link href="color-picker">
          go to color picker
        </Link>
      </main>
    </MaxWidthWrapper>
  );
}
