import Link from "next/link";
import styles from "@/app/ui/styles/home.module.css";

export default function Home() {
  return (
    // <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
    <div>
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <div className="container mx-auto p-4 relative">
          <div className={`${styles.bg_white} ${styles.border_gray} border-2 rounded-lg`}>
            <div className="flex flex-col justify-center p-4">
              <h1 className="text-4xl text-gray-700 font-bold mb-4">Welcome</h1>
              <p className="text-lg text-gray-600 mb-8">This is a blog built with Next.js and Tailwind CSS.</p>
              <div className="flex flex-row gap-4">
                <Link href="/blog/posts" className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 shadow-md shadow-blue-600/40">Posts</Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
    // </div>
  );
}
