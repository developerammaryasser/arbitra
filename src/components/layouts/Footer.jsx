import Link from "next/link"

const Footer = () => {
  return (
    <footer className="h-[80px] text-white/65 bg-n-3 py-8">
      <div className="container flex flex-col md:flex-row justify-center md:justify-between items-center h-full ">
        <ul className="flex-1 flex justify-start items-center gap-8 font-poppins *:text-white/65">
          <li><Link href="/">Privacy policy</Link></li>
          <li><Link href="/">Terms</Link></li>
        </ul>
        &copy; {new Date().getFullYear()} all copyright reserved by {" "} <Link href="www.linkedin.com/in/frontend-ammar-yasser" className="px-3 underline hover:text-primary transition-all"> Ammar Yasser</Link>
      </div>
    </footer>
  )
}
export default Footer