import Link from "next/link";

const LandingPage = () => {
  return (
    <div>
      <h1>This is the landing page</h1>
      <p>
        This should show up whether you go to <code>/</code> or{" "}
        <code>/[languageCode]</code>
      </p>
      <ul>
        <Link href="/en-US">
          <li>
            to <a>/en-US</a>
          </li>
        </Link>
        <Link href="/en-US/srl/fooBar">
          <li>
            to <a>/en-US/srl/slug</a>
          </li>
        </Link>
        <Link href="/en-US/profile/redactedOne">
          <li>
            to <a>/en-US/profile/redactedOne</a>
          </li>
        </Link>
        <Link href="/en-US/profile/redactedTwo">
          <li>
            to <a>/en-US/profile/redactedTwo</a>
          </li>
        </Link>
        <Link href="/en-US/profile/redactedThree">
          <li>
            to <a>/en-US/profile/redactedThree</a>
          </li>
        </Link>
      </ul>
    </div>
  );
};

export default LandingPage;
