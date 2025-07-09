import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <div className="min-h-screen text-primary flex flex-col items-center justify-center px-4">
      <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
      <p className="text-lg text-muted mb-6">
        The page you were trying to access does not exist.
      </p>
      <Link
        to="/"
        className="flex items-center gap-2 px-6 py-2 rounded-xl underline hover:opacity-80 transition"
      >
        <ArrowLeft size={20} />
        Go back to homepage
      </Link>
    </div>
  );
}
