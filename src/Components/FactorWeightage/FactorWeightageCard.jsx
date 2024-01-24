import { Card, Paper, Slider, Typography } from "@mui/material";
import { useRecoilState } from "recoil";
import { useState } from "react";
import factorsState from "../../recoil/atoms/factorsState";

function FactorWeightageCard({ factor }){

    const [factors , setfactors] = useRecoilState(factorsState);
    const [sliderWeight, setsliderWeight] = useState(factor.weight);

    const sliderMarks = [
		{
			value: 33.3,
		},
		{
			value: 66.6,
		},
		{
			value: 100,
		},
		{
			value: 133.3,
		},
		{
			value: 166.6,
		},
	];

    function handleSliderChange(){
        const newArray = factors.map(element => {
           return element.name === factor.name ? {... element ,"weight": sliderWeight} : element;
        })
        setfactors(newArray);
    }

    return(
        <>
            <Paper elevation={24} style={{ flex: "0 0 calc(30% - 10px)" ,margin: "10px"}}>
                    <div style={{
                            flex: "0 0 calc(30% - 10px)",
                            margin: "15px",
                            flexDirection:"column"
                        }}>
                            <div 
                                style={{
                                    display:"flex",
                                    justifyContent:"center"
                                }}>
                                    <Typography>
                                        {factor.name}
                                    </Typography>
                            </div>
                            <Slider 
                                    disabled={false}
                                    track={false}
                                    marks={sliderMarks}
                                    max={200}
                                    min={1}
                                    size="large"
                                    value={sliderWeight}
                                    valueLabelDisplay="off"
                                    onChange={(e)=>{
                                        setsliderWeight(e.target.value);
                                        handleSliderChange();
                                    }}
                            ></Slider>
                            <div style={{
                                display:"flex",
                                alignItems:"center",
                                justifyContent:"center"
                            }}>
                                <Typography variant='h5' align="center" >
                                {getWeightInfoText(sliderWeight )}
                                </Typography>
                            </div>
                            
                        </div>
                    </Paper>  
        </>
    )
}

const getWeightInfoText = (weight) => {

    switch (true) {
        case weight < 33:
            return `😭`;
        case weight < 66:
            return `😢`;
        case weight < 90:
            return `🙁`;
        case weight < 106:
            return `😶`;
        case weight < 133:
            return `🙂`;
        case weight < 166:
            return `😊`;
        case weight <= 200:
            return "😃";
        default:
            return '';
    }
};

export default FactorWeightageCard;