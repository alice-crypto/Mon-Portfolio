const SocialIcons = () => {
  const styles = {
    icon: {
      textDecoration: "none",
      fontSize: "22px",
      padding: "10px",
      transition: "0.2s ease-in",
    },
  };

  return (
    <div className="socialIcons" style={styles.socialIcons}>
      <a className="icon" style={styles.icon} href="https://github.com/alice-crypto">
        <i className="fa-brands fa-github" aria-hidden="true" title="Alice Yalakou' GitHub Profile"></i>
      </a>
      <a className="icon" style={styles.icon} href="https://www.linkedin.com/in/alice-merveille-yalakou-704093184//">
        <i className="fa-brands fa-linkedin" aria-hidden="true" title="Alice Yalakou' LinkedIn Profile"></i>
      </a>
      <a className="icon" style={styles.icon} href="https://www.instagram.com/alice_merveille237/">
        <i className="fa-brands fa-instagram" aria-hidden="true" title="Alice Yalakou' Instagram Profile"></i>
      </a>
      <a className="icon" style={styles.icon} href="https://twitter.com/alice_yalakou">
        <i className="fa-brands fa-twitter" aria-hidden="true" title="Alice Yalakou' Twitter Profile"></i>
      </a>
    </div>
  );
};

export default SocialIcons;
