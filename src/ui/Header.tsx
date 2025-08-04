import Container from "./Container";
import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-[#2419be] py-6">
      <Container>
        <div className="flex items-center justify-between">
          <Link href="/">
            <h1 className="text-2xl font-bold text-white tracking-wider">
              Saknen
            </h1>
          </Link>
        </div>
      </Container>
    </header>
  );
};

export default Header;
