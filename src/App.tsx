import React, { useEffect, useState } from 'react';
import Home from './Home';

const Routers = ['Home', 'List'];

export default () => {
  const [currentRoute, setRoute] = useState(Routers[0]);

  useEffect(() => {
    fetch('./api/list')
      .then((res) => res.json())
      .then((res) => console.log('res:', res));
  }, []);

  const renderRouter = () => {
    switch (currentRoute) {
      default:
        return <Home />;
    }
  };

  return (
    <div className="layout">
      <div className="layout-header">
        {Routers.map((router) => {
          return (
            <div
              key={router}
              className={`layout-header-btn ${router === currentRoute ? 'layout-header-btn-current' : ''}`}
              onClick={setRoute.bind(null, router)}
            >
              {router}
            </div>
          );
        })}
      </div>
      <div>{renderRouter()}</div>
    </div>
  );
};
