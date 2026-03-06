import React from "react";

export default function Dropdown({ label, options, value, handleSort }){
    return(
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 w-full sm:w-auto font-primary flex-1 sm:flex-none">
            <label className="text-gray-600 dark:text-gray-300 font-medium whitespace-nowrap">{label}</label>
            <select 
                className="w-full sm:w-48 px-4 py-2 text-base border border-gray-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-gray-900 dark:text-white rounded-md focus:outline-none focus:ring-2 focus:ring-primary transition cursor-pointer" 
                value={value}
                onChange={(event)=> handleSort(event.target.value)}
            >
                {options.map((optionVal,index) => (
                    <option key={index} value={optionVal}>
                        {optionVal}
                    </option>
                ))}
            </select>
        </div>
    );

}
