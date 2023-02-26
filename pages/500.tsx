import { ReactElement } from 'react';

export default function Page500() {
  return (
    <div>
      <h1>500 Internal Server Error</h1>
    </div>
  );
}

Page500.getLayout = function getLayout(page: ReactElement) {
  return page;
};
