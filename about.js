```javascript
// pages/index.js
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>Welcome to my Next.js app!</h1>
      <Link href="/about">
        <a>Go to About Page</a>
      </Link>
    </div>
  );
}
```
```javascript
// pages/about.js
import { useRouter } from 'next/router';

export default function About() {
  const router = useRouter();
  const handleClick = () => {
    // This will cause the error
    router.push('/another-page-that-does-not-exist');
  };

  return (
    <div>
      <h1>About Page</h1>
      <button onClick={handleClick}>Go to Non-Existent Page</button>
    </div>
  );
}
```