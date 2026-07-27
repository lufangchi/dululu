export const metadata = {
  title: "contact — fangchi",
};

type ContactLink = {
  key: string;
  label: string;
  href: string;
  external: boolean;
  colors: { bg: string; fg: string };
  icon: () => React.ReactElement;
};

const ICON_PROPS = {
  width: 18,
  height: 18,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

function EmailIcon() {
  return (
    <svg {...ICON_PROPS}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg {...ICON_PROPS}>
      <circle cx="7" cy="7" r="2.4" />
      <circle cx="17" cy="17" r="2.4" />
      <path d="M9 8.5 15 15.5" />
    </svg>
  );
}

function GithubIcon() {
  return (
    <svg {...ICON_PROPS}>
      <path d="m8 9-4 3 4 3" />
      <path d="m16 9 4 3-4 3" />
      <path d="m13 6-2 12" />
    </svg>
  );
}

const CONTACTS: ContactLink[] = [
  {
    key: "email",
    label: "email",
    href: "mailto:fangchi.lulu0709@gmail.com",
    external: false,
    colors: { bg: "#E3E7DF", fg: "#3E4438" },
    icon: EmailIcon,
  },
  {
    key: "linkedin",
    label: "linkedin",
    href: "https://www.linkedin.com/in/fangchi-lu/",
    external: true,
    colors: { bg: "#DFE6E9", fg: "#2E4650" },
    icon: LinkedInIcon,
  },
  {
    key: "github",
    label: "github",
    href: "https://github.com/lufangchi",
    external: true,
    colors: { bg: "#E9E3E7", fg: "#43333C" },
    icon: GithubIcon,
  },
];

export default function Contact() {
  return (
    <>
      <p className="section-title">contact</p>
      <div className="contact-tabs">
        {CONTACTS.map((c) => {
          const Icon = c.icon;
          return (
            <a
              key={c.key}
              className="contact-tab"
              href={c.href}
              {...(c.external ? { target: "_blank", rel: "noreferrer" } : {})}
            >
              <span
                className="contact-tab-icon"
                style={{ background: c.colors.bg, color: c.colors.fg }}
              >
                <Icon />
              </span>
              <span>{c.label}</span>
            </a>
          );
        })}
      </div>
    </>
  );
}
