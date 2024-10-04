import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-primaryBlack p-4 flex items-center justify-between">
      <Link href="/">
        <Image
          src="/images/NEXT_LOGO-WHITE.png"
          alt="NextGen Management Agency Logo"
          width={120}
          height={50}
          className="inline-block"
        />
      </Link>
      <ul className="flex space-x-6 text-primaryWhite font-sans">
        <li><Link href="/">Home</Link></li>
        <li><Link href="/about">About</Link></li>
        <li><Link href="/services">Services</Link></li>
        <li><Link href="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
