import { TestComponent } from "@/components/test";

export default function Home() {
  return (
    <main className="flex flex-col">
      <h1>Hello World</h1>
      <br />

      <div>
        <TestComponent />
      </div>
    </main>
  );
}
