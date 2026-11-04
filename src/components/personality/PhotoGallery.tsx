import { useRef, useState } from "react";
import type { Project } from "../../data/projects";
export function PhotoGallery({ project }: { project: Project }) {
  const dialog = useRef<HTMLDialogElement>(null);
  const [active, setActive] = useState(0);
  const caption = (i: number) =>
    project.imageCaptions?.[i] ?? `${project.title} — view ${i + 1}`;
  const open = (index: number) => {
    setActive(index);
    dialog.current?.showModal();
  };
  return (
    <>
      <div
        className={`project-gallery ${project.title === "Lukat" ? "lukat-gallery" : ""}`}
      >
        {project.imagePaths.map((image, i) => (
          <figure key={image}>
            <button
              type="button"
              onClick={() => open(i)}
              aria-label={`Enlarge ${caption(i)}`}
            >
              <img src={image} alt={caption(i)} loading="lazy" />
            </button>
            <figcaption>{caption(i)}</figcaption>
          </figure>
        ))}
      </div>
      <dialog
        ref={dialog}
        className="photo-lightbox"
        aria-label={`${project.title} photos`}
        onClick={(e) => {
          if (e.target === e.currentTarget) dialog.current?.close();
        }}
      >
        <div className="lightbox-controls">
          <span>
            {active + 1} / {project.imagePaths.length}
          </span>
          <button
            type="button"
            onClick={() => dialog.current?.close()}
            aria-label="Close photos"
            autoFocus
          >
            Close ×
          </button>
        </div>
        <img src={project.imagePaths[active]} alt={caption(active)} />
        <div className="lightbox-caption">
          <button
            type="button"
            disabled={project.imagePaths.length < 2}
            onClick={() =>
              setActive(
                (active + project.imagePaths.length - 1) %
                  project.imagePaths.length,
              )
            }
            aria-label="Previous photo"
          >
            ←
          </button>
          <p>{caption(active)}</p>
          <button
            type="button"
            disabled={project.imagePaths.length < 2}
            onClick={() => setActive((active + 1) % project.imagePaths.length)}
            aria-label="Next photo"
          >
            →
          </button>
        </div>
      </dialog>
    </>
  );
}
