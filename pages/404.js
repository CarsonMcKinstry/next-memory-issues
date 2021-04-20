const NotFoundPage = () => {
  return (
    <div>
      <h1>Ooops, you found our 404 page</h1>
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
    </div>
  );
};

export default NotFoundPage;
