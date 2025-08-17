// src/app/admin/layout.tsx
import React from 'react';

interface AdminLayoutProps {
  children: React.ReactNode;
}

const AdminLayout: React.FC<AdminLayoutProps> = ({ children }) => {
  return (
    <div className="admin-layout">
      <header className="admin-header">
        <nav>
            <h1 className='text-3xl '>Admin Dashboard</h1>
        </nav>
      </header>
      <main className="admin-main">
        {children}
      </main>
      <footer className="admin-footer">
        <p>&copy; 2023 Admin Dashboard</p>
      </footer>
    </div>
  );
};

export default AdminLayout;