import React from "react";

export default function SearchBox({ label, placeholder, value, handleSearch }) {
    return (
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 w-full sm:w-auto font-primary flex-1 sm:flex-none">
            <label className="text-gray-600 dark:text-gray-300 font-medium whitespace-nowrap">{label}</label>
            <input 
                type="text" 
                className="w-full sm:w-64 px-4 py-2 text-base border border-gray-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-gray-900 dark:text-white rounded-md focus:outline-none focus:ring-2 focus:ring-primary transition" 
                placeholder={placeholder} 
                value={value}
                onChange={(event)=>handleSearch(event.target.value)}
            />
        </div>
    );
}