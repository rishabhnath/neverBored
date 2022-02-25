import React, { useState } from 'react';


const CategoriesChips = (prop) => {
    const { data, selectedCategories, onselectCategory, onRemoveCategory, onCategoriesChips } = prop;


    return (
        <>
            <div className="container-fluid">


                <div className="row">
                    {data.map((item, i) => {
                        return <div className="col-4 mb-2">
                            {selectedCategories.includes(item) ? <a onClick={() => onRemoveCategory(item)}>
                                <div className="chip" onMouseOut={() => onCategoriesChips()} style={{ fontSize: "small", backgroundColor: "#2d9c64", color: "white" }}>
                                    {item.category_name}
                                </div>
                            </a> : <a onClick={() => onselectCategory(item)}>

                                <div className="chip" style={{ fontSize: "small" }}>
                                    {item.category_name}
                                </div>
                            </a>}
                        </div>;
                    })}
                </div>
            </div>
        </>
    );
};

export default CategoriesChips;
