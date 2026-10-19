import Image from "next/image";
import { EVENT_PHOTOS } from "@/lib/content";

export default function EventCarousel() {
  // Rendered twice so the CSS scroll animation loops seamlessly, exactly as
  // the partner logo strip does.
  const photos = [...EVENT_PHOTOS, ...EVENT_PHOTOS];
  return (
    <section className="events">
      <div className="events-label">Out and about with our clients and partners</div>
      <div className="photo-carousel">
        <div className="photo-track">
          {photos.map((p, i) => (
            <figure key={i} aria-hidden={i >= EVENT_PHOTOS.length}>
              <Image
                src={p.src}
                alt={i < EVENT_PHOTOS.length ? p.alt : ""}
                width={p.w}
                height={p.h}
              />
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
