import Image from 'next/image'
import Link from 'next/link'
import ProductCards from './components/ProductCards'

export default function Home() {
  return (
    <main><h1>this is next js</h1>
    <Link href='/users'>users</Link>
    <ProductCards/>
    </main>
  )
}
