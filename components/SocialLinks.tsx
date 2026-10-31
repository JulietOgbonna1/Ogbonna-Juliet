import { FaFacebookF, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { site } from "@/lib/data";

const links = [
  { href: site.socials.linkedin, label: "LinkedIn", Icon: FaLinkedinIn },
  { href: site.socials.github, label: "GitHub", Icon: FaGithub },
  { href: site.socials.facebook, label: "Facebook", Icon: FaFacebookF },
  { href: `mailto:${site.email}`, label: "Email", Icon: FiMail },
];

export function SocialLinks({ className = "" }: { className?: string }) {
  return (
    <ul className={`flex items-center gap-3 ${className}`}>
      {links.map(({ href, label, Icon }) => (
        <li key={label}>
          <a
            href={href}
            target={href.startsWith("http") ? "_blank" : undefined}
            rel="noopener noreferrer"
            aria-label={label}
            className="grid size-10 place-items-center rounded-full border border-brand/60 text-fg shadow-[0_0_14px_-2px_var(--glow)] transition duration-300 hover:-translate-y-1 hover:bg-brand hover:text-white"
          >
            <Icon className="size-4" />
          </a>
        </li>
      ))}
    </ul>
  );
}
