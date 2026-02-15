import { motion } from "motion/react";

const BASE_URL = import.meta.env.BASE_URL;

const ProjectDetails = ({
  title,
  description,
  subDescription,
  image,
  tags,
  href,
  closeModal,
}) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center w-full h-full overflow-hidden backdrop-blur-md bg-primary/50">
      <motion.div
        className="relative max-w-2xl border shadow-lg rounded-2xl bg-gradient-to-b from-indigo to-navy border-terminal/20 shadow-terminal/5"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
      >
        <button
          onClick={closeModal}
          className="absolute p-2 rounded-lg top-5 right-5 bg-indigo hover:bg-storm border border-white/10 hover:border-coral/50 transition-all"
        >
          <img src={`${BASE_URL}og_assets/close.svg`} className="w-6 h-6" />
        </button>
        <img src={image} alt={title} className="w-full rounded-t-2xl" />
        <div className="p-6">
          <h5 className="mb-2 text-2xl font-bold text-text">{title}</h5>
          <p className="mb-3 font-normal text-text-muted">{description}</p>
          {subDescription.map((subDesc, index) => (
            <p className="mb-3 font-normal text-text-muted" key={index}>{subDesc}</p>
          ))}
          <div className="flex items-center justify-between mt-6">
            <div className="flex gap-3">
              {tags.map((tag) => (
                <img
                  key={tag.id}
                  src={tag.path}
                  alt={tag.name}
                  className="rounded-lg size-10 hover-animation"
                />
              ))}
            </div>
            <a
              href={href}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 font-medium cursor-pointer text-terminal hover:text-terminal-dim hover-animation"
            >
              View Project{" "}
              <img src={`${BASE_URL}og_assets/arrow-up.svg`} className="size-4" />
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectDetails;
