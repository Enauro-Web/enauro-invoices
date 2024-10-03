import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col justify-center h-full text-center gap-6 max-w-5xl mx-auto">

      <h1 className="text-5xl font-bold">Invoices</h1>
      <h3 className="text-lg font-bold text-gray-400">by Enauro Web</h3>
      <p>
        <Button asChild>
          <Link href="/dashboard">Sign In</Link>
        </Button>
      </p>
    </main>
  );
}