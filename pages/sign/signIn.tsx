import { ReactNode } from 'react';

export default function SignIn() {
  return (
    <div>
      <h1>Sign In</h1>
    </div>
  );
}

SignIn.getLayout = function getLayout(page: ReactNode) {
  return page;
};
