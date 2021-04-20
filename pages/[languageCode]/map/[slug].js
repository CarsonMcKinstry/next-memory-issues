import Link from "next/link";
import { useRouter } from "next/router";

const MapPage = () => {
  const router = useRouter();

  const { slug } = router.query;

  return (
    <div>
      <h1>This is the map/slug page</h1>
      <p>
        In the real app we would make API calls and show you a map, but in this
        app, we're just going to echo back to you what we get as the slug
      </p>
      <code>slug = {slug}</code>
      <ul>
        <Link href="/">
          <li>
            to <a>/</a>
          </li>
        </Link>
        <Link href="/en-US/map/fooBar">
          <li>
            to <a>/en-US/map/slug</a>
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

export default MapPage;
