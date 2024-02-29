import ABC from '@/components/pages/abc'
import XYZ from '@/components/pages/xyz'
import { cookies } from 'next/headers'


export default function Home() {
  const cookieStore = cookies()
  console.log("🚀 ~ Home ~ cookieStore:", cookieStore)
  const homePage = cookieStore.get('homePage')?.toString()
  const cookieList = cookieStore.getAll()
  console.log("🚀 ~ Home ~ cookieList:", cookieList)
  console.log("🚀 ~ Home ~ homePage:", homePage)


  if (homePage === 'abc') return <ABC />
  if (homePage === 'xyz') return <XYZ />
  else return <div>Welcome to the default home page</div>;
}
