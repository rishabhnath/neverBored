import React from 'react';
import { Range, getTrackBackground } from 'react-range';


const RangeTwo = (prop) => {
    const { STEP, MAX, MIN, setStep, values, onRangeTwo } = prop;


    return (
        <>
            <div className="container-fluid">

                <div className="row pl-3 pr-3">
                    <br />
                    <div className="col">
                        <Range

                            values={values}
                            step={STEP}
                            min={MIN}
                            max={MAX}
                            onChange={(values) => setStep(values)}
                            renderTrack={({ props, children }) => <div
                                onMouseDown={props.onMouseDown}
                                onTouchStart={props.onTouchStart}
                                style={{
                                    ...props.style,
                                    height: '36px',
                                    display: 'flex',
                                    width: '100%'
                                }}
                            >
                                <div

                                    onMouseOut={() => onRangeTwo()}
                                    ref={props.ref}
                                    style={{
                                        height: '8px',
                                        width: '100%',
                                        borderRadius: '4px',
                                        background: getTrackBackground({
                                            values,
                                            colors: ['#ccc', '#2d9c64', '#ccc'],
                                            min: MIN,
                                            max: MAX
                                        }),
                                        alignSelf: 'center'
                                    }}
                                >
                                    {children}
                                </div>
                            </div>
                            }
                            renderThumb={({ index, props, isDragged }) => <div
                                {...props}
                                style={{
                                    ...props.style,
                                    height: '25px',
                                    width: '25px',
                                    borderRadius: '50%',
                                    backgroundColor: '#FFF',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    border: "2.67px solid #2d9c64"
                                }}
                            >
                            </div>
                            } />
                    </div>


                </div>
            </div>
        </>
    );
};

export default RangeTwo;
