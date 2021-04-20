import Link from "next/link";

const ProfilePageTwo = () => {
  return (
    <div>
      <h1>This is the profile page two</h1>
      <p>
        Redacted for obvious reasons, but we have at the moment three pages
        related to a user's profile
      </p>
      <ul>
        <Link href="/">
          <li>
            to <a>/</a>
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

export default ProfilePageTwo;
