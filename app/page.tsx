import Image from "next/image";
import ThemeSwitch from "./components/ToggleButton";
import Navbar from "./components/Navbar";
import Input from "./components/Input";
import Button from "./components/Button";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Navbar />
    </main>
  );
}
