import { socialLinks } from "../data/socialLinks";
import "../styles/connect.css";
import avatarUrl from "../../assets/avatar.png";

export function ConnectPage() {
  return (
    <main className="connect-page">
      <section className="connect-card" aria-labelledby="connect-title">
        <a className="connect-card__brand" href="/" aria-label="Return to Chliona Pham's portfolio">
          &lt; CP &gt;
        </a>
        <div className="connect-card__portrait">
          <img src={avatarUrl} alt="Chliona Pham" />
        </div>
        <p className="connect-card__eyebrow">Let’s connect</p>
        <h1 id="connect-title">Chliona Pham</h1>
        <p className="connect-card__tagline">
          Data Analytics <span aria-hidden="true">|</span> Supply Chain Operations{" "}
          <span aria-hidden="true">|</span> Dashboard Development
        </p>
        <nav className="connect-links" aria-label="Professional and social links">
          {socialLinks.map(({ name, url, icon: Icon, download }) => {
            const isPlaceholder = url.startsWith("REPLACE_");
            return (
              <a
                key={name}
                className={`connect-link${isPlaceholder ? " connect-link--placeholder" : ""}`}
                href={isPlaceholder ? undefined : url}
                target={download ? undefined : "_blank"}
                rel={download ? undefined : "noopener noreferrer"}
                download={download || undefined}
                aria-label={`${name}${isPlaceholder ? " (link coming soon)" : ""}`}
                aria-disabled={isPlaceholder || undefined}
              >
                <Icon aria-hidden="true" />
                <span>{name}</span>
                <span className="connect-link__arrow" aria-hidden="true">→</span>
              </a>
            );
          })}
        </nav>
        <p className="connect-card__footer">Open to thoughtful conversations and new opportunities.</p>
      </section>
    </main>
  );
}
