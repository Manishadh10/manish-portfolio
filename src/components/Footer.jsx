function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container">
        <p>&copy; {year} Manish Adhikari</p>
      </div>
    </footer>
  );
}

export default Footer;
