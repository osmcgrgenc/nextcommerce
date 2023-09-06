import Link from 'next/link';
import React from 'react';

function FilterToolbox({layout, setLayout}) {
    const handleLayoutChange = (newLayout) => {
        setLayout(newLayout);
    };

    return (
        <>
            <div className="toolbox">
                <div className="toolbox-left">
                    <div className="toolbox-info">
                        Showing <span>9 of 56</span> Products
                    </div>
                </div>
                <div className="toolbox-right">
                    <div className="toolbox-sort">
                        <label htmlFor="sortby">Sort by:</label>
                        <div className="select-custom">
                            <select
                                name="sortby"
                                id="sortby"
                                className="form-control"
                            >
                                <option value="popularity" selected>
                                    Most Popular
                                </option>
                                <option value="rating">Most Rated</option>
                                <option value="date">Date</option>
                            </select>
                        </div>
                    </div>
                    <div className="toolbox-layout">
                        <div className={`cursor-pointer tool-layout-list btn-layout ${
                            layout === 'list' ? 'active' : ''
                        }`}
                             onClick={() => handleLayoutChange('list')}>
                            <svg width="16" height="10">
                                <rect x="0" y="0" width="4" height="4"/>
                                <rect x="6" y="0" width="10" height="4"/>
                                <rect x="0" y="6" width="4" height="4"/>
                                <rect x="6" y="6" width="10" height="4"/>
                            </svg>
                        </div>


                        <div
                            className={`cursor-pointer tool-layout-2 btn-layout ${
                                layout === '2-cols' ? 'active' : ''
                            }`}
                            onClick={() => handleLayoutChange('2-cols')}
                        >
                            <svg width="10" height="10">
                                <rect x="0" y="0" width="4" height="4"/>
                                <rect x="6" y="0" width="4" height="4"/>
                                <rect x="0" y="6" width="4" height="4"/>
                                <rect x="6" y="6" width="4" height="4"/>
                            </svg>
                        </div>

                        <div
                            className={`cursor-pointer tool-layout-3 btn-layout ${
                                layout === '3-cols' ? 'active' : ''
                            }`}
                            onClick={() => handleLayoutChange('3-cols')}
                        >
                            <svg width="16" height="10">
                                <rect x="0" y="0" width="4" height="4"/>
                                <rect x="6" y="0" width="4" height="4"/>
                                <rect x="12" y="0" width="4" height="4"/>
                                <rect x="0" y="6" width="4" height="4"/>
                                <rect x="6" y="6" width="4" height="4"/>
                                <rect x="12" y="6" width="4" height="4"/>
                            </svg>
                        </div>

                        <div
                            className={`cursor-pointer tool-layout-4 btn-layout ${
                                layout === '4-cols' ? 'active' : ''
                            }`}
                            onClick={() => handleLayoutChange('4-cols')}
                        >
                            <svg width="22" height="10">
                                <rect x="0" y="0" width="4" height="4"/>
                                <rect x="6" y="0" width="4" height="4"/>
                                <rect x="12" y="0" width="4" height="4"/>
                                <rect x="18" y="0" width="4" height="4"/>
                                <rect x="0" y="6" width="4" height="4"/>
                                <rect x="6" y="6" width="4" height="4"/>
                                <rect x="12" y="6" width="4" height="4"/>
                                <rect x="18" y="6" width="4" height="4"/>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default FilterToolbox;
