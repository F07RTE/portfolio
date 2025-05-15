import styles from "./Home.module.css";

function Home() {
  return (
    <div className={styles.container}>
      <section className={styles.hero}>
        <div className={styles.name}>Guilherme Forte</div>
        <div className={styles.bio}>
          <strong>Hi, I&apos;m a software craftsman!</strong> <br />
          Turning ideas into robust code. <br />
          <strong>Let&apos;s connect!</strong>
        </div>
      </section>
      <section className={styles.projects}>
        <div className={styles.projectTitle}>🚀 Featured Project&apos;s</div>
        <div className={styles.projectDesc}>
          <strong>Super Training</strong> <br />
          App to help you track and manage your trainings.
          <br />
          <a
            href="https://supertraining.pro/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <strong>Try it out!</strong>
          </a>
        </div>
        <div className={styles.projectDesc}>
          <strong>Check For Secrets</strong>
          <br />
          A Node.js CLI tool to detect sensitive patterns (like passwords, keys,
          or secrets) in your git-cached files or across your repository.
          <br />
          Prevent accidental commits of secrets with automated checks.
          <br />
          Perfect for use with git hooks (e.g., Husky).
          <br />
          <br />
          <a
            href="https://github.com/F07RTE/check-for-secrets"
            target="_blank"
            rel="noopener noreferrer"
          >
            <strong>Check it out on GitHub</strong>
          </a>
          <br />
          Or install it with npm:
          <a
            href="https://www.npmjs.com/package/check-for-secrets"
            target="_blank"
            rel="noopener noreferrer"
          >
            <strong>npm install check-for-secrets</strong>
          </a>
        </div>
        <div className={styles.projectTitle}>🎨 More Coming Soon!</div>
      </section>
    </div>
  );
}

export default Home;
