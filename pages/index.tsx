import Head from 'next/head'
import { dummyData } from '@/dummyDB'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Head>
        <title>Blog App</title>
      </Head>
      <main className="max-w-2xl mx-auto pt-16">
        <h1 className="mt-6 text-3xl font-bold">Blog Posts</h1>
        {dummyData.map((data) => (
          <Link href={`/blog/${data.slug}`} passHref legacyBehavior>
            <a
              key={data.slug}
              className="mt-6 block border rounded-md border-white p-5 hover:bg-white hover:text-black hover:cursor-pointer"
            >
              <h2 className="text-xl font-semi-bold">{data.title}</h2>
              <p className="mt-2 text-slate-500">
                {data.content.substring(0, 32)}...
              </p>
            </a>
          </Link>
        ))}
      </main>
    </>
  )
}
