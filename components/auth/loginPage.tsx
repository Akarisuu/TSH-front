import Button from "components/shared/button";
import Logo from "components/shared/logo";
import Image from "next/image";
import Link from "next/link";
import { FormEvent, useState } from "react";

export default function Login() {
  const [form, setForm] = useState({ username: "", password: "" });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <section className="flex min-h-screen bg-white">
      <div className="relative w-[42%] hidden lg:block">
        <Image
          src="/images/login.png"
          layout="fill"
          objectFit="cover"
          alt="login image"
        />
      </div>
      <div className="flex px-mobile items-center justify-center flex-1 lg:px-desktop">
        <div className="relative w-full h-full flex flex-col items-center justify-center max-w-[500px]">
          <div className="absolute top-10 left-0">
            <Logo />
          </div>
          <div className="flex flex-col w-full py-28 ">
            <h1 className="text-3xl leading-10">Login</h1>
            <form className="mt-7 flex flex-col" onSubmit={handleSubmit}>
              <label htmlFor="username" className="text-sm leading-4">
                Username
              </label>
              <input
                type="text"
                id="username"
                placeholder="Enter username"
                className="mt-2 p-4 outline-none border-[1px] border-grey-200 rounded-lg"
                value={form.username}
                onChange={(e) => setForm({ ...form, username: e.target.value })}
              />
              <label htmlFor="password" className="text-sm leading-4 mt-6">
                Password
              </label>
              <input
                type="password"
                id="password"
                placeholder="Enter password"
                className="mt-2 p-4 outline-none border-[1px] border-grey-200 rounded-lg"
                value={form.password}
                onChange={(e) => setForm({ ...form, password: e.target.value })}
              />
              <Button className="w-full mt-14">Log In</Button>
            </form>
            <Link href="/reset-password" passHref>
              <a className="mt-4 underline text-grey-400 text-sm leading-4">
                Forgot password?
              </a>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
