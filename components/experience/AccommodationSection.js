import Image from 'next/image';

import { urlForImage } from '@/lib/sanity';

import TextBody from '@/components/shared/TextBody';

export default function AccommodationSection({ heading, body, image }) {
  return (
    <section className="max-w-7xl mx-auto flex flex-col space-y-12 sm:flex-row sm:space-y-0 sm:space-x-24 items-center text-right">
      <div className="w-full sm:w-1/2 space-y-3">
        <h3 className="tw-section-heading">{heading}</h3>
        <div>
          <TextBody content={body} />
        </div>
      </div>

      <div className="relative aspect-square w-full sm:w-1/2 bg-gray-100 rounded-2xl shadow">
        {image && (
          <Image
            src={urlForImage(image).width(1080).height(1080).url()}
            alt={image.alt}
            layout="fill"
            className="rounded-2xl"
          />
        )}
      </div>
    </section>
  );
}
