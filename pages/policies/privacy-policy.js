import Layout from '@/components/navigation/Layout';

export default function PrivacyPolicyPage() {
  return (
    <Layout
      metaTitle="Privacy Policy"
      metaDescription="Privacy policy for Bukitt's website and email marketing."
    >
      <div className="tw-section prose prose-xl mx-auto">
        <h1 className="font-mono font-bold uppercase">Privacy Policy</h1>

        <p>This is the Cookie Policy for Bukitt, accessible from bukitt.com</p>

        <h2>What Are Cookies</h2>

        <p>
          As is common practice with almost all professional websites this site
          uses cookies, which are tiny files that are downloaded to your
          computer, to improve your experience. This page describes what
          information they gather, how we use it and why we sometimes need to
          store these cookies. We will also share how you can prevent these
          cookies from being stored however this may downgrade or
          &apos;break&apos; certain elements of the sites functionality.
        </p>

        <h2>How We Use Cookies</h2>

        <p>
          We use cookies for a variety of reasons detailed below. Unfortunately
          in most cases there are no industry standard options for disabling
          cookies without completely disabling the functionality and features
          they add to this site. It is recommended that you leave on all cookies
          if you are not sure whether you need them or not in case they are used
          to provide a service that you use.
        </p>

        <h2>Disabling Cookies</h2>

        <p>
          You can prevent the setting of cookies by adjusting the settings on
          your browser (see your browser Help for how to do this). Be aware that
          disabling cookies will affect the functionality of this and many other
          websites that you visit. Disabling cookies will usually result in also
          disabling certain functionality and features of the this site.
          Therefore it is recommended that you do not disable cookies. This
          Cookies Policy was created with the help of the{' '}
          <a href="https://www.cookiepolicygenerator.com/cookie-policy-generator/">
            Cookies Policy Generator from CookiePolicyGenerator.com
          </a>
          .
        </p>

        <h2>The Cookies We Set</h2>

        <ul>
          <li>
            <h4>Email newsletters related cookies</h4>
            <p>
              This site offers newsletter or email subscription services and
              cookies may be used to remember if you are already registered and
              whether to show certain notifications which might only be valid to
              subscribed/unsubscribed users.
            </p>
          </li>

          <li>
            <h4>Site preferences cookies</h4>
            <p>
              In order to provide you with a great experience on this site we
              provide the functionality to set your preferences for how this
              site runs when you use it. In order to remember your preferences
              we need to set cookies so that this information can be called
              whenever you interact with a page is affected by your preferences.
            </p>
          </li>
        </ul>

        <h2>Third Party Cookies</h2>

        <p>
          In some special cases we also use cookies provided by trusted third
          parties. The following section details which third party cookies you
          might encounter through this site.
        </p>

        <ul>
          <li>
            <p>
              This site uses Google Analytics which is one of the most
              widespread and trusted analytics solution on the web for helping
              us to understand how you use the site and ways that we can improve
              your experience. These cookies may track things such as how long
              you spend on the site and the pages that you visit so we can
              continue to produce engaging content.
            </p>
            <p>
              For more information on Google Analytics cookies, see the official
              Google Analytics page.
            </p>
          </li>

          <li>
            <p>
              We also use social media buttons and/or plugins on this site that
              allow you to connect with your social network in various ways. For
              these to work the following social media sites including;
              Facebook, Instagram, will set cookies through our site which may
              be used to enhance your profile on their site or contribute to the
              data they hold for various purposes outlined in their respective
              privacy policies.
            </p>
          </li>
        </ul>

        <h2>More Information</h2>

        <p>
          Hopefully that has clarified things for you and as was previously
          mentioned if there is something that you aren&apos;t sure whether you
          need or not it&apos;s usually safer to leave cookies enabled in case
          it does interact with one of the features you use on our site.
        </p>

        <p>
          For more general information on cookies, please read{' '}
          <a href="https://www.generateprivacypolicy.com/#cookies">
            &apos;Cookies&apos; article from the Privacy Policy Generator
          </a>
          .
        </p>

        <p>
          However if you are still looking for more information then you can
          contact us through one of our preferred contact methods:
        </p>

        <ul>
          <li>Email: support@bukitt.com</li>
        </ul>
      </div>
    </Layout>
  );
}
