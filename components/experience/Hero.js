import Image from 'next/image';

import { urlForImage } from '@/lib/sanity';

import TextBody from '@/components/shared/TextBody';
import ButtonLink from '@/components/shared/ButtonLink';

export default function Hero({ heading, tagline, body, coverImage }) {
  return (
    <div className="relative">
      <div className="relative shadow-xl sm:rounded-2xl sm:overflow-hidden">
        {coverImage && (
          <>
            <Image
              src={urlForImage(coverImage).width(1920).height(1080).url()}
              alt={coverImage?.alt}
              layout="fill"
              objectFit="cover"
              quality={100}
              priority
            />
            <div className="absolute inset-0 bg-gray-400 mix-blend-multiply" />
          </>
        )}

        <div className="relative px-3 sm:px-0 space-y-3 sm:space-y-6 py-12 sm:py-24">
          {tagline && (
            <h2 className="tw-tagline text-center font-medium tracking-tight text-white">
              {tagline}
            </h2>
          )}

          {heading && (
            <h1 className="text-center text-4xl font-bold tracking-tight sm:text-4xl lg:text-5xl text-white uppercase font-heading">
              {heading}
            </h1>
          )}

          {body && (
            <div className="max-w-lg sm:max-w-3xl mx-auto text-center text-white">
              <TextBody content={body} />
            </div>
          )}

          <div className="flex justify-center">
            <ButtonLink btnLinkText="Book Now" btnUrl="#" />
          </div>
        </div>
      </div>
    </div>
  );
}