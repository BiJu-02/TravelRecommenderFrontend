import React, { useState, useEffect } from 'react';

const SearchSelect = ({ data, func, isMulti,isFocused }) => {
    // Initialize selected as an array for both single and multi-select
    const [selected, setSelected] = useState(isMulti ? [] : '');
    const [searchQuery, setSearchQuery] = useState('');
    const [customData, setCustomData] = useState(data);


    useEffect(() => {
        setCustomData(data?.filter(item => item.toLowerCase().includes(searchQuery.toLowerCase())));
    }, [data, searchQuery]);

    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
    };

    const handleSelectItem = (item) => {
        if (!isMulti) {
            setSelected('');
            setSelected(item);
            func(item);
        } else {
            // For multi-select, check if item is already selected
            const index = selected.indexOf(item);
            let newSelected = [...selected];
            if (index === -1) {
                newSelected.push(item); // Add item if not already selected
            } else {
                newSelected.splice(index, 1); // Remove item if already selected
            }
            setSelected(newSelected);
            func(newSelected); // Pass array of selected items back to parent
        }
    };

    return (
        <div>
            
                <div className='flex flex-col gap-3'>
                    <input
                        type="text"
                        placeholder="Search..."
                        value={searchQuery}
                        onChange={handleSearchChange}
                        className='border py-2 px-5'
                    />
                    <div className='h-[200px] w-[300px] overflow-y-scroll' style={{boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px"}}>
                        {customData?.map((d, index) => (
                            <h4 key={index} className='px-5 py-3 cursor-pointer' onClick={() => handleSelectItem(d)}>
                                {d}
                            </h4>
                        ))}
                    </div>
            
                </div>
             
          
        </div>
    );
};

export default SearchSelect;
