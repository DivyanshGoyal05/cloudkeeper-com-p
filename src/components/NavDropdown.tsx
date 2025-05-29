import React from 'react';

interface DropdownItem {
    icon: React.ReactNode;
    title: string;
    desc: string;
}

interface NavDropdownProps {
    items: DropdownItem[];
    gridCols?: 2 | 3;
}

const NavDropdown = ({ items, gridCols = 2 }: NavDropdownProps) => (
    <div className="absolute left-0 top-full mt-2 w-[800px] bg-white rounded-2xl shadow-2xl p-8 z-50 flex flex-col gap-6 animate-fade-in border border-gray-100">
        <div className={`grid grid-cols-${gridCols} gap-6`}>
            {items.map((item, idx) => (
                <div key={idx} className="flex gap-4 items-start rounded-xl p-3">
                    {item.icon}
                    <div>
                        <div className="font-semibold text-gray-800 text-base mb-1 hover:text-pink-600 cursor-pointer transition-colors">{item.title}</div>
                        <div className="text-gray-500 text-sm leading-snug">{item.desc}</div>
                    </div>
                </div>
            ))}
        </div>
        <div className="flex gap-6 items-center pt-4 border-t border-gray-100">
            <span className="font-semibold text-gray-700">AWS</span>
            <span className="font-semibold text-gray-700">Google Cloud</span>
            <span className="font-semibold text-gray-700">Azure</span>
        </div>
    </div>
);

export default NavDropdown; 