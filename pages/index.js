
import Layout from "/components/layout";
import { useSession } from "next-auth/react";

export default function Home() {
  const { data: session } = useSession()

  return <Layout>
    <div className="text-blue-900 flex justify-between">
      <h2>
        Hello, <b>{session?.user?.email}</b>
      </h2>
      <div className="flex bg-gray-400 gap-1 text-black rounded-lg overflow-hidden">
        <img src={session?.user?.image} alt="" className="w-10 h-15" />
        <span className=" py-2 px-3">
          {session?.user?.name}
        </span>
      </div>
    </div>
  </Layout>
}
