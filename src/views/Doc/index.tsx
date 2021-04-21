import { FC, useState } from 'react';
import { RedocStandalone } from 'redoc';

const openapiContent = require.context('../../openapi', true, /\.json$/);

const Doc:FC = () => {
  const [api] = useState(() => openapiContent(openapiContent.keys()[1]));
  return (
    <div>
      <RedocStandalone
        spec={api}
      />
    </div>
  );
};

export default Doc;
