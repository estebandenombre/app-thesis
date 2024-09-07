// components/Header.tsx
import React from 'react';

const Header: React.FC = () => {
    return (
        <header className="flex items-center justify-between border-b border-gray-300 px-10 py-3 bg-white shadow">
            <div className="flex items-center gap-4">
                <h2 className="text-lg font-bold">Beacon Tracker</h2>
            </div>

        </header>
    );
};

export default Header;
