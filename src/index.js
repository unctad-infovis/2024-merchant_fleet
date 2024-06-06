import React from 'react';

import { createRoot } from 'react-dom/client';

import Figure1 from './jsx/Figure1.jsx';

const container_figure1 = document.getElementById('app-root-2024-merchant_fleet_figure1');
if (container_figure1) {
  const root_figure1 = createRoot(container_figure1);
  root_figure1.render(<Figure1 />);
}
