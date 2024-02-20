import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex justify-center items-center h-screen p-24 bg-background">
      <div className="flex-col flex gap-16">
        <h1 className="text-3xl text-primary font-bold">
          Welcome! join or create a Room!
        </h1>
        <p className="text-primary">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum
          mollitia expedita soluta.
        </p>
        <div className="flex gap-5 justify-center items-center">
          <Link href="/test" className="p-3 px-5 bg-blue-800 rounded-md">
            Join
          </Link>
          <Link href="/room" className="p-3 px-5 bg-blue-800 rounded-md">
            Create
          </Link>
        </div>
      </div>
    </main>
  );
}
