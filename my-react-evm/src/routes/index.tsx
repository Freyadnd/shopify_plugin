import { FC } from 'react';
import * as React from "react"
import { Routes as RouterRoutes, Route } from 'react-router-dom'; // 重命名 Router 的 Routes
import { Home } from '../pages';
import { Portfolio } from '../pages'

const AppRoutes: FC = () => (
  <RouterRoutes>
    <Route path="/" element={<Home />} />
    <Route path="/portfolio" element={<Portfolio />} />
  </RouterRoutes>
);

export default AppRoutes;
