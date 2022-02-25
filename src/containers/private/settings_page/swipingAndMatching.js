import React, { useState, useEffect } from 'react';
import backArrow from '../../../assets/icons/backArrowWhite.svg';
import RangeTwo from '../../../components/shared/range';
import LocationInput from '../../../components/shared/locationinputsugg';
import Slider from '../../../components/shared/Slider';
import distanceRange from '../../../assets/icons/distanceRange.svg';
import CategoriesChips from '../../../components/shared/categories';
import useAlert from '../../../hooks/use-alert';
import info from '../../../assets/icons/info.svg';
import { serverUrl } from '../../../configs/api-endpoints';
import APIServices from '../../../core/services/data/api-services';


const apiService = new APIServices();


const SwipingAndMatchingSetting = (props) => {
    const userData = props.location && props.location.state || [];
    const { openAlert } = useAlert();
    const [values, setValues] = useState([0, 300]);
    const [location, setLocation] = useState("");
    const [distance, setDistance] = useState([50]);
    const [groupSize, setGroupSize] = useState([0, 5]);
    const [age, setAge] = useState([0, 60]);
    const [selectedCategories, setSelectedCategories] = useState([]);
    const [categories, setCategories] = useState([]);

    const [data, setData] = useState([ { category_name: "Category1" }, { category_name: "Category2" }, { category_name: "Category3" }, { category_name: "Category4" }, { category_name: "Category5" }, { category_name: "Category6" }, { category_name: "Category7" }, { category_name: "Category8" }, { category_name: "Category9" } ]);
    const back = () => {
        props.history.push("/settings");
    };
    const setStep = (val) => {
        setValues(val);
    };

    const setDistanceFun = (val) => {
        setDistance(val);
    };
    const setGroupFun = (val) => {
        setGroupSize(val);
    };
    const setAgeFun = (val) => {
        setAge(val);
    };

    const onselectCategory = (item) => {
        if (selectedCategories.length < 5) {
            setCategories((prev) => [...prev, item]);
        } else {
            openAlert("error", "", "max 5 category only");
        }
    };


    const onRemoveCategory = (val) => {
        const newArray = [];
        for (let i = 0; i < categories.length; i++) {
            if (categories[i] !== val) {
                newArray.push(selectedCategories[i]);
            }
        }
        setCategories(newArray);
    };


    useEffect(() => {
        if (userData.length > 0) {
            const categoriesData = userData[0].categories === null ? [] : userData[0].categories.split(",") ;
            setCategories(categoriesData);
            setValues([userData[0].budget_min, userData[0].budget_max]);
            setLocation([userData[0].location_city]);
            setDistance([userData[0].search_distance]);
            setGroupSize([userData[0].group_min_size, userData[0].group_max_size]);
            setAge([userData[0].age_min_preferences, userData[0].age_max_preferences]);
        }
    }, []);

    const updateBudget = async () => {
        const budget_min = values[0];
        const budget_max = values[1];
        const url = `${serverUrl}/updateOngoingStep3`;
        const data = { budget_min, budget_max };
        console.log("this is budget api", data);
        const type = "put";
        const user = await apiService.put(url, data, type);


        if (user.results && !user.results.success) {
            openAlert("error", "error", "Something went wrong");
        } else {


        }
    };

    const updateLocation = async () => {
        const location = "Indore";
        const url = `${serverUrl}/updateOngoingStep2`;
        const data = { location };
        console.log("this is Location api", data);
        const type = "put";
        const user = await apiService.put(url, data, type);

        if (user.results && !user.results.success) {
            openAlert("error", "Something went wrong", "error");
        } else {

        }
    };


    const updateDistance = async () => {
        const location = "Indore";
        const url = `${serverUrl}/updateOngoingStep2`;
        const data = { distance };
        console.log("this is Distance api", data);
        const type = "put";
        const user = await apiService.put(url, data, type);

        if (user.results && !user.results.success) {
            openAlert("error", "Something went wrong", "error");
        } else {

        }
    };

    const updateGroup = async () => {
        const group_min_size = groupSize[0];
        const group_max_size = groupSize[1];

        const url = `${serverUrl}/updateOngoingStep4`;
        const data = { group_max_size, group_min_size };
        console.log("this is group, Age and Category api", data);
        const type = "put";
        const user = await apiService.put(url, data, type);

        if (user.results && !user.results.success) {
            openAlert("error", "error", "Something went wrong");
        } else {
        }
    };
    const updateAge = async () => {
        const age_min_preference = age[0];
        const age_max_preference = age[1];
        // const categories = categories[0];

        const url = `${serverUrl}/updateOngoingStep4`;
        const data = { age_min_preference, age_max_preference };
        console.log("this is group, Age and Category api", data);
        const type = "put";
        const user = await apiService.put(url, data, type);

        if (user.results && !user.results.success) {
            openAlert("error", "error", "Something went wrong");
        } else {
        }
    };
    const updateCategory = async () => {
        const categories = categories[0];

        const url = `${serverUrl}/updateOngoingStep4`;
        const data = { categories: JSON.stringify(selectedCategories) };
        console.log("this is group, Age and Category api", data);
        const type = "put";
        const user = await apiService.put(url, data, type);

        if (user.results && !user.results.success) {
            openAlert("error", "error", "Something went wrong");
        } else {
        }
    };


    return (
        <>
            <div className="fade-animation mr-0">
                <div className="card" style={{ height: "103px", background: "#2D9B63", borderRadius: "0" }}>
                    <div className="row mr-0">
                        <div className="col-3">
                            <a onClick={back}>
                                <img src={backArrow} alt="back" className="ml-4 caret-hide pt-4 back-button-user-login" />
                            </a>
                        </div>
                        <div className="col pt-4 font-weight-bold text-white caret-hide">
                            <span className="pl-3 caret-hide " style={{ fontSize: "18px" }}>Swiping & Matching</span>
                        </div>
                    </div>
                </div>
                <br />
                <div className="row pl-3 pr-3 mr-0">
                    <div className="col" >
                        <p className="font-weight-bold caret-hide" style={{ fontSize: "16px" }}>Budget</p>
                    </div>
                    <div className="col">
                        <span className="badge  text-success float-right caret-hide" style={{ background: "#f2f2f2", borderTopLeftRadius: "0", borderBottomLeftRadius: "0" }} >{values[1]}$+ </span>
                        <span className="badge text-success float-right caret-hide" style={{ background: "#f2f2f2", borderRadius: "0" }}>- </span>
                        <span className="badge text-success float-right caret-hide" style={{ background: "#f2f2f2", borderTopRightRadius: "0", borderBottomRightRadius: "0" }} > {values[0]}$</span>
                    </div>
                </div>

                <RangeTwo onRangeTwo={updateBudget} STEP={0.1} MIN={0} MAX={300} setStep={setStep} values={values} />
                <hr />
                {/* <LocationInput /> */}
                <div className="form-group ml-3" >
                    <label htmlFor="exampleFormControlInput1 font-weight-bold ml-3">Location <img src={info} /></label>
                    {/* <div ref={ref}> */}
                    <div className="row mr-0">
                        <div className="col-10">
                            <input
                                value={location}
                                /*
                                 * value={value}
                                 * onChange={handleInput}
                                 */
                                onMouseOut={() => updateLocation()}
                                onChange={(e) => setLocation(e.target.value)}
                                // disabled={!ready}
                                placeholder="e.g. Amsterdam"
                                className="form-control" id="exampleFormControlInput1"
                            />
                        </div>
                        <div className="col-2 pl-0">
                            {/* <button className="btn btn-success btn-sm" onClick={getLiveLocation}><img src={location} /></button> */}
                        </div>
                    </div>
                    {/* {status === "OK" && <ul>{renderSuggestions()}</ul>} */}
                </div>
                <div className="row mr-0 pl-3 pr-3">
                    <div className="col" >
                        <p className="font-weight-bold caret-hide" style={{ fontSize: "16px" }}>Distance</p>                    </div>
                    <div className="col">
                        <span className="badge badge-light text-success float-right" style={{ background: "#f2f2f2" }}>{`${distance}`} KM <img src={distanceRange} />
                        </span>
                    </div>
                </div>
                <Slider onSlider={updateDistance} STEP={0.1} MIN={0} MAX={50} setFun={setDistanceFun} distance={distance}/>
                <hr />
                <div className="row mr-0 pl-3 pr-3">
                    <div className="col" >
                        <p className="font-weight-bold caret-hide" style={{ fontSize: "16px" }}>Group size</p>
                    </div>
                    <div className="col">
                        <span className="badge badge-light text-success float-right caret-hide" style={{ background: "#f2f2f2" }}>{`${groupSize[0]} - ${groupSize[1]}`}
                        </span>
                    </div>
                </div>
                <RangeTwo onRangeTwo={updateGroup} STEP={0.1} MIN={0} MAX={5} setStep={setGroupFun} values={groupSize}/>

                {/* <Slider STEP={0.1} MIN={0} MAX={5} setFun={setGroupFun} distance={groupSize}/> */}
                <hr />
                <div className="row pl-3 pr-3 mr-0">
                    <div className="col" >
                        <p className="font-weight-bold caret-hide" style={{ fontSize: "16px" }}>Age range</p>
                    </div>
                    <div className="col">
                        <span className="badge  text-success float-right caret-hide" style={{ background: "#f2f2f2", borderTopLeftRadius: "0", borderBottomLeftRadius: "0" }} >{age[1]} </span>
                        <span className="badge text-success float-right caret-hide" style={{ background: "#f2f2f2", borderRadius: "0" }}>- </span>
                        <span className="badge text-success float-right caret-hide " style={{ background: "#f2f2f2", borderTopRightRadius: "0", borderBottomRightRadius: "0" }} > {age[0]}</span>
                    </div>
                </div>
                <RangeTwo onRangeTwo={updateAge} STEP={0.1} MIN={0} MAX={60} setStep={setAgeFun} values={age}/>
            </div>
            <hr />
            <div className="row ml-1 mr-0">
                <div className="col">
                    <p className="font-weight-bold caret-hide" style={{ fontSize: "small" }}>Categories:</p>
                </div>
                <div className="col">
                    <p className=" float-right pr-2 caret-hide" style={{ fontSize: "small" }}>{`${selectedCategories.length}/5`}</p>
                </div>
            </div>
            {/* <CategoriesChips onCategoriesChips={updateCategory} className="caret-hide" data={data} selectedCategories={selectedCategories} onselectCategory={onselectCategory} onRemoveCategory={onRemoveCategory}/> */}
            <div className="row mr-0">
                {data && data.map((item, i) => {
                    return <div className="col-4 mb-2">
                        {categories.includes(item.category_name) ? <a onClick={() => onRemoveCategory(item.category_name)}>
                            <div className="chip" style={{ fontSize: "small", backgroundColor: "#2d9c64", color: "white" }}>
                                {item.category_name}
                            </div>
                        </a> : <a onClick={() => onselectCategory(item.category_name)}>

                            <div className="chip" style={{ fontSize: "small" }}>
                                {item.category_name}
                            </div>
                        </a>}
                    </div>;
                })}      </div>
            <br />
        </>
    );
};

export default SwipingAndMatchingSetting;
