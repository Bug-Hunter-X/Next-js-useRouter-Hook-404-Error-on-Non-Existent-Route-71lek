# Next.js useRouter Hook 404 Error

This repository demonstrates a common error in Next.js applications when using the `useRouter` hook to navigate to a route that does not exist.  The error results in a 404 (Not Found) error.

## Bug Description
The `useRouter` hook's `push` method is used to navigate to a route ('/another-page-that-does-not-exist') that has not been defined in the `pages` directory. This causes Next.js to throw a 404 error.  The solution addresses how to handle such situations gracefully.

## How to Reproduce
1. Clone this repository.
2. Run `npm install`.
3. Run `npm run dev`.
4. Navigate to the `/about` page.
5. Click the button to navigate to the non-existent page.  A 404 error will be displayed.

## Solution
The solution involves implementing error handling and either redirecting to an appropriate page or displaying a user-friendly error message.