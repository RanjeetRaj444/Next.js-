import { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: {
    absolute: "My Blog"
  },
}
const Blog = () => {
  return (
    <>
      <h1>My Blog</h1>
      <Link href={"/"}>Home</Link>
    </>
  )
}

export default Blog