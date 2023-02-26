import { ReactNode } from 'react';

export default function SignUp() {
  return (
    <div>
      <h1>Sign Up</h1>
    </div>
  );
}
SignUp.getLayout = function getLayout(page: ReactNode) {
  return page;
};
