import ButtonLink from '@/components/shared/ButtonLink';
import TextBody from '@/components/shared/TextBody';

export default function AboutSection({ heading, body, callToAction }) {
  return (
    <section className="max-w-4xl flex-col space-y-6 mx-auto text-center">
      <div>
        <h3 className="">{heading}</h3>
      </div>

      <p className="">{body}</p>

      <div>
        <ButtonLink
          btnLinkText={callToAction?.linkText}
          btnURL={callToAction?.url ? callToAction?.url : '#'}
        />
      </div>
    </section>
  );
}
