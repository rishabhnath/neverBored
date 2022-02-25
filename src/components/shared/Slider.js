import React, { useState } from 'react';
import { Range, getTrackBackground } from 'react-range';


const Slider = (prop) => {
    const { STEP, MAX, MIN, setFun, distance, onSlider } = prop;


    return (
        <>
            <div className="container-fluid pl-3 pr-3">
                <div className="row pr-3 pl-1">
                    <div className="col">
                        <Range
                            values={distance}
                            step={STEP}
                            min={MIN}
                            max={MAX}
                            onChange={(values) => setFun(values)}
                            renderTrack={({ props, children }) => <div
                                onMouseDown={props.onMouseDown}
                                onTouchStart={props.onTouchStart}
                                style={{
                                    ...props.style,
                                    height: "36px",
                                    display: "flex",
                                    width: "100%"
                                }}
                            >
                                <div
                                    onMouseOut={() => onSlider()}
                                    ref={props.ref}
                                    style={{
                                        height: "8px",
                                        width: "100%",
                                        borderRadius: "4px",
                                        background: getTrackBackground({
                                            values: distance,
                                            colors: ["#2d9c64", "#ccc"],
                                            min: MIN,
                                            max: MAX
                                        }),
                                        alignSelf: "center"
                                    }}
                                >
                                    {children}
                                </div>
                            </div>
                            }
                            renderThumb={({ props, isDragged }) => <div
                                {...props}
                                style={{
                                    ...props.style,
                                    height: "25px",
                                    width: "25px",
                                    borderRadius: "50%",
                                    backgroundColor: "#FFF",
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    boxShadow: "0px 2px 6px #AAA",
                                    border: "2.67px solid #2d9c64"
                                }}
                            >
                            </div>
                            }
                        />
                    </div>

                </div>
            </div>

        </>

    );
};
export default Slider;
