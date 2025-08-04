import Container from "./Container";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8">
      <Container>
        <p className="text-end text-sm">
          &copy; {currentYear} Sakneen inc. All rights reserved .
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
