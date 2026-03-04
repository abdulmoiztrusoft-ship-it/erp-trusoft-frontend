import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AppShell } from '../layouts/AppShell.jsx';
import Dashboard from '../pages/Dashboard';
import { routes } from '../routes/index.jsx';

export function RouterProvider() {
  return (
    <BrowserRouter>
      <AppShell>
        <Routes>
          {/* root should render dashboard without forcing a url change */}
          <Route path="/" element={<Dashboard />} />

          {/* All other routes */}
          {routes.map((route) => (
            <Route key={route.path} path={route.path} element={route.element} />
          ))}
        </Routes>
      </AppShell>
    </BrowserRouter>
  );
}
