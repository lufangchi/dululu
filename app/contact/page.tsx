export const metadata = {
  title: "contact — fangchi",
};

export default function Contact() {
  return (
    <>
      <p className="section-title">contact</p>
      <div className="post-list">
        <a className="post-row" href="mailto:you@example.com">
          <span className="tag" style={{ background: "#E3E7DF", color: "#3E4438" }}>
            email
          </span>
          <span className="post-title">you@example.com</span>
        </a>
        <a
          className="post-row"
          href="https://linkedin.com"
          target="_blank"
          rel="noreferrer"
        >
          <span className="tag" style={{ background: "#DFE6E9", color: "#2E4650" }}>
            linkedin
          </span>
          <span className="post-title">linkedin.com/in/your-name</span>
        </a>
        <a
          className="post-row"
          href="https://github.com"
          target="_blank"
          rel="noreferrer"
        >
          <span className="tag" style={{ background: "#E9E3E7", color: "#43333C" }}>
            github
          </span>
          <span className="post-title">github.com/your-username</span>
        </a>
      </div>
    </>
  );
}
