import Head from "next/head";
import Link from "next/link";

export default function About() {
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 w-full max-w-md lg:max-w-6xl mx-auto text-r3 font-medium">
        <p className="col-span-2">404 Not Found</p>

        <p className="opacity-50">The requested page cannot be found.</p>

        <p className="opacity-50">
          404 Not Found is a response code indicating that your browser has
          communicated with the server, but the server is unable or unwilling to
          find and return what you requested.
        </p>

        <p className="col-span-2">
          <Link href="/" className="anchor">Go Home</Link>
        </p>
      </div>
    </>
  );
}
