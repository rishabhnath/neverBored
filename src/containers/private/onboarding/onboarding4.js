import React, { useState, useEffect } from 'react';
import { Range, getTrackBackground } from 'react-range';
import useAlert from '../../../hooks/use-alert';
import { serverUrl } from '../../../configs/api-endpoints';
import APIServices from '../../../core/services/data/api-services';

const apiService = new APIServices();

const STEP = 0.1;
const MIN = 0;
const MAX = 10;
const MINAGE = 0;
const MAXAGE = 60;

function Onboarding4(data) {
    const { nextStep, user_data } = data;
    const [values, setValues] = useState([0, 10]);
    const [age, setAge] = useState([0, 60]);
    const [categories, setCategories] = useState([ { category_name: "Category1" }, { category_name: "Category2" }, { category_name: "Category3" }, { category_name: "Category4" }, { category_name: "Category5" }, { category_name: "Category6" }, { category_name: "Category7" }, { category_name: "Category8" }, { category_name: "Category9" } ]);
    const [selectedCategories, setSelectedCategories] = useState([]);
    const { openAlert } = useAlert();


    useEffect(() => {
        if (user_data.length > 0) {
            setValues([user_data[0].group_min_size, user_data[0].group_max_size]);
            setAge([user_data[0].age_min_preferences, user_data[0].age_max_preferences]);
            const categoriesData = user_data[0].categories === null ? [] : user_data[0].categories.split(",") ;
            console.log(categoriesData);
            setSelectedCategories(categoriesData);
            /*
             * setSelectedCategories(categoriesData);
             * categoriesData.map((items, i) => {
             *     onselectCategory(items);
             * });
             */
        }
    }, []);


    const onselectCategory = (item) => {
        console.log(selectedCategories);
        if (selectedCategories.length < 3) {
            setSelectedCategories((prev) => [...prev, item]);
        } else {
            openAlert("error", "", "max 3 category only");
        }
    };

    const onRemoveCategory = (val) => {
        const newArray = [];
        for (let i = 0; i < selectedCategories.length; i++) {
            if (selectedCategories[i] !== val) {
                newArray.push(selectedCategories[i]);
            }
        }
        setSelectedCategories(newArray);
    };


    const submit = async () => {
        const group_max_size = values[1];
        const group_min_size = values[0];
        const age_min_preference = age[0];
        const age_max_preference = age[1];
        const url = `${serverUrl}/updateOngoingStep4`;
        const data = { group_max_size, group_min_size, age_min_preference, age_max_preference, categories: selectedCategories.toString() };
        const type = "put";
        const user = await apiService.put(url, data, type);

        if (user.results && !user.results.success) {
            openAlert("error", "error", "Something went wrong");
        } else {
            nextStep();
        }
    };

    return (
        <>
            <div className="fade-animation">

                <div className="row">
                    <label className="font-weight-bold" style={{ fontSize: "22px" }}>Finetune even more</label>

                </div>
                <br />
                <div className="row">
                    <div className="col" >
                        <p className="font-weight-bold ml-n3" style={{ fontSize: "small" }}>Group size</p>
                    </div>
                    <div className="col">
                        <span className="badge badge-light text-success float-right"> {values[1]}$+ </span>
                        <span className="badge badge-light text-success float-right">- </span>
                        <span className="badge badge-light text-success float-right"> {values[0]}$</span>

                    </div>
                </div>
                <div>
                    <div >
                        <Range
                            values={values}
                            step={STEP}
                            min={MIN}
                            max={MAX}
                            onChange={(values) => setValues(values)}
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
                                    ref={props.ref}
                                    style={{
                                        height: '5px',
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
                            }
                        />                </div>

                    <br />

                </div>
                <div>
                    <div className="row">
                        <div className="col" >
                            <p className="font-weight-bold ml-n3" style={{ fontSize: "small" }}>Age preference</p>
                        </div>
                        <div class="col">
                            {/* <a href="#" class="badge badge-light">Light</a> */}
                            <span className="badge badge-light text-success float-right"> {age[1]}$+ </span>
                            <span className="badge badge-light text-success float-right">- </span>
                            <span className="badge badge-light text-success float-right"> {age[0]}$</span>

                        </div>
                    </div>
                    {/* <br /> */}
                    <div >
                        <Range
                            values={age}
                            step={STEP}
                            min={MINAGE}
                            max={MAXAGE}
                            onChange={(values) => setAge(values)}
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
                                    ref={props.ref}
                                    style={{
                                        height: '5px',
                                        width: '100%',
                                        borderRadius: '4px',
                                        background: getTrackBackground({
                                            values: age,
                                            colors: ['#ccc', '#2d9c64', '#ccc'],
                                            min: MINAGE,
                                            max: MAXAGE
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
                            }
                        />
                    </div>
                    <br />
                    <div className="row">
                        <p className="font-weight-bold" style={{ fontSize: "small" }}>Categories:</p>
                    </div>
                    <div className="row">

                        <p style={{ fontSize: "small" }}>Explaining about categories, explain to choose atleast 3 options</p>
                    </div>
                    <div className="row">
                        {categories.map((item, i) => {
                            return <div className="col-4 mb-2">
                                {selectedCategories.includes(item.category_name) ? <a onClick={() => onRemoveCategory(item.category_name)}>
                                    <div className="chip" style={{ fontSize: "small", backgroundColor: "#2d9c64", color: "white" }}>
                                        {item.category_name}
                                    </div>
                                </a> : <a onClick={() => onselectCategory(item.category_name)}>

                                    <div className="chip" style={{ fontSize: "small" }}>
                                        {item.category_name}
                                    </div>
                                </a>}
                            </div>;
                        })}
                    </div>


                    <center>
                        <p style={{ fontSize: "85%" }} className="mt-1"> This can always be changed later in your settings</p>
                        {/* <button className="next-btn btn-sm " onClick={submit}>Next</button> */}
                    </center>
                    <div className="row ml-0 mr-0 mt-3 pt-3" style={{ borderTop: "1px solid", borderColor: "#E5E5E5" }}>
                        <div className="col-6  ml-0 mr-0">
                            <button style={{ background: "#ffffff", border: "0px solid", padding: "8px", width: "100%", borderRadius: "16px", height: "64px" }} className=" btn-sm " onClick={submit}>Back</button>
                        </div>
                        <div className="col-6 ml-0 mr-0">
                            <button style={{ background: "#2d9b63", border: "0px solid", padding: "8px", color: "#ffffff", width: "100%", borderRadius: "16px", height: "64px" }} className="btn-sm " onClick={submit}>Next</button>
                        </div>
                    </div>
                </div>
            </div>

        </>


    );
}

export default Onboarding4;
