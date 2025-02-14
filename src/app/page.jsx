import Image from "next/image";

export default function Home() {
  return (
    <main className="h-full mx-auto text-center flex flex-col items-center mt-80">
      <div>
        <h1>
          My <span className="text-acc_green">website</span> is under
          <span className="text-main_pink-100"> construction</span> 🏗️
        </h1>
        <h2 className="animate-bounce mt-4 text-main_blue">Stay Tuned!</h2>
      </div>
    </main>
  );
}
