// src/app/admin/layout.tsx
import React from 'react';

interface AdminLayoutProps {
  children: React.ReactNode;
}

export const metadata = {
  title: 'My App',
  description: 'Admin Dashboard Example',
};


const AdminLayout: React.FC<AdminLayoutProps> = ({ children }) => {
  return (

    <html lang="en">
      <body>
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
      </body>
    </html>

   
  );
};

export default AdminLayout;