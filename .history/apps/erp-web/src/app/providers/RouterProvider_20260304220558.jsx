import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AppShell } from '../layouts/AppShell.jsx';
import Dashboard from '../pages/Dashboard';
import { routes } from '../routes/index.jsx';

export function RouterProvider() {
  return (
    <BrowserRouter>
      <AppShell>
        <Routes>
          <Route path="/" element={<Dashboard />} />

          {/* All other routes */}
          {routes.map((route) => (
            <Route key={route.path} path={route.path} element={route.element} />
          ))}

          {/* catch-all - if nothing matches, render dashboard (avoids redirect loops) */}
          <Route path="*" element={<Dashboard />} />
        </Routes>
      </AppShell>
    </BrowserRouter>
  );
}
