import ABC from '@/components/pages/abc'
import Default from '@/components/pages/default'
import XYZ from '@/components/pages/xyz'
import { cookies } from 'next/headers'


export default function Home() {
  const cookieStore = cookies()
  console.log("🚀 ~ Home ~ cookieStore:", cookieStore)
  const homePage = cookieStore.get('homePage')
  const cookieList = cookieStore.getAll()
  console.log("🚀 ~ Home ~ cookieList:", cookieList)
  console.log("🚀 ~ Home ~ homePage:", { homePage })
  console.log("🚀 ~ Home ~ typeof homePage:", typeof homePage)



  if (homePage?.value === 'abc') return <ABC />
  if (homePage?.value === 'xyz') return <XYZ />
  if (homePage?.value === 'default') return <Default />
  else return <>Hello</>
}
