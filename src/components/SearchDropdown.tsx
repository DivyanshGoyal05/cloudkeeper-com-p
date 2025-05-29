import React, { useState, useEffect } from 'react';
import Image from 'next/image';

interface SearchDropdownProps {
    isOpen: boolean;
    onClose: () => void;
}

const NAVBAR_HEIGHT = 107; // px (estimated combined height of banner + navbar)

const SearchDropdown: React.FC<SearchDropdownProps> = ({ isOpen, onClose }) => {
    // Handle click outside to close dropdown
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            const dropdown = document.getElementById('search-dropdown');
            if (dropdown && !dropdown.contains(event.target as Node)) {
                onClose();
            }
        };

        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    return (
        <>
            {/* Blur overlay below navbar/banner */}
            <div
                className="fixed left-0 right-0 bg-black/20 backdrop-blur-sm transition-all duration-300"
                style={{ top: NAVBAR_HEIGHT, bottom: 0, zIndex: 40 }}
            />

            {/* Search dropdown */}
            <div
                id="search-dropdown"
                className="fixed left-1/2 -translate-x-1/2 w-[600px] bg-white rounded-2xl shadow-2xl p-6 z-50 animate-fade-in"
                style={{ top: NAVBAR_HEIGHT + 32 }} // 32px margin below navbar
            >
                <div className="flex items-center gap-4 mb-6">
                    <div className="flex-1 relative">
                        <input
                            type="text"
                            placeholder="Search..."
                            className="w-full px-4 py-3 pl-12 rounded-xl border border-gray-200 focus:outline-none focus:border-pink-500 transition-colors"
                        />
                        <Image
                            src="/icons/search.svg"
                            width={20}
                            height={20}
                            alt="Search"
                            className="absolute left-4 top-1/2 -translate-y-1/2"
                        />
                    </div>
                </div>

                {/* Placeholder for search results */}
                <div className="space-y-4">
                    <div className="text-gray-500 text-center py-8">
                        Start typing to search...
                    </div>
                </div>
            </div>
        </>
    );
};

export default SearchDropdown; 