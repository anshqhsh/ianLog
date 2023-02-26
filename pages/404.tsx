import { ReactElement } from 'react';

export default function PageNotFound() {
  return (
    <div>
      <h1>title="404 Page Not Found"</h1>
    </div>
  );
}

// ----------------------------------------------------------------------

PageNotFound.getLayout = function getLayout(page: ReactElement) {
  return page;
};
