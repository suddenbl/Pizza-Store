import React from 'react';
import ContentLoader from 'react-content-loader';

const Skeleton = () => (
  <ContentLoader
    className="pizza-block"
    speed={0}
    width={280}
    height={500}
    viewBox="0 0 280 500"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb">
    <circle cx="134" cy="135" r="125" />
    <rect x="0" y="290" rx="12" ry="12" width="280" height="27" />
    <rect x="0" y="336" rx="10" ry="10" width="280" height="88" />
    <rect x="2" y="444" rx="13" ry="13" width="90" height="27" />
    <rect x="122" y="442" rx="25" ry="25" width="155" height="40" />
  </ContentLoader>
);

export default Skeleton;
