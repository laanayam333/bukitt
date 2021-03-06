import { inquiryFormPageQuery } from '@/lib/queries';
import { sanityClient } from '@/lib/sanity.server';

import Layout from '@/components/navigation/Layout';
import InquiryForm from '@/components/forms/InquiryForm';

export default function InquiryFormPage({ inquiryFormPageData }) {
  return (
    <Layout
      metaTitle={inquiryFormPageData?.title}
      metaDescription={inquiryFormPageData?.hero?.body}
    >
      <section className="tw-section">
        <div className="mx-auto max-w-4xl">
          <div className="mx-auto max-w-xl text-center">
            <h1 className="mt-1 flex flex-col font-mono text-4xl font-bold uppercase tracking-tight lg:text-7xl">
              Inquiry Form
            </h1>
            <p className="mt-3 text-lg lg:text-xl">
              Please enter your personal info and the details of your trip. Our
              travel concierge will reply within 72 hours.
            </p>
          </div>
          <InquiryForm
            destinations={inquiryFormPageData?.destinations}
            experiences={inquiryFormPageData?.experiences}
          />
        </div>
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  const inquiryFormPageData = await sanityClient.fetch(inquiryFormPageQuery);

  return {
    props: { inquiryFormPageData },
  };
}
