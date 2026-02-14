import { mySocials } from "../constants";
const Footer = () => {
  return (
    <section className="flex flex-wrap items-center justify-between gap-5 pb-6 text-sm text-text-muted c-space">
      <div className="divider-line mb-4" />
      <div className="flex gap-2">
        <p className="hover:text-terminal cursor-pointer transition-colors">Terms & Conditions</p>
        <p className="text-text-dim">|</p>
        <p className="hover:text-terminal cursor-pointer transition-colors">Privacy Policy</p>
      </div>
      <div className="flex gap-4">
        {mySocials.map((social, index) => (
          <a href={social.href} key={index} className="hover:scale-110 transition-transform duration-200">
            <img src={social.icon} className="w-5 h-5 opacity-70 hover:opacity-100 transition-opacity" alt={social.name} />
          </a>
        ))}
      </div>
      <p>© 2026 <span className="text-terminal">Khushal</span>. All rights reserved.</p>
    </section>
  );
};

export default Footer;
