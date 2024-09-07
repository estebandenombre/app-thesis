// components/SkeletonLoaderBeacons.tsx
import React from 'react';

const SkeletonLoaderBeacons: React.FC = () => {
    return (
        <div className="w-full md:w-1/4 p-4 bg-white shadow-lg rounded-lg">
            <div className="mb-4 h-10 bg-gray-200 animate-pulse rounded-lg"></div>
            <ul className="space-y-4">
                {[...Array(5)].map((_, index) => (
                    <li
                        key={index}
                        className="flex items-center p-2 bg-gray-200 animate-pulse rounded-lg shadow-sm"
                    >
                        <div className="flex-grow">
                            <div className="h-4 bg-gray-300 rounded w-3/4 mb-2"></div>
                            <div className="h-4 bg-gray-300 rounded w-1/2"></div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SkeletonLoaderBeacons;
