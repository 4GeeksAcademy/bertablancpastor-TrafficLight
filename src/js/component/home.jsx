import React, {useState} from "react";


//create your first component
const Home = () => {

	const [colorRed, setColorRed] = useState("danger")
	const [colorOrange, setColorOrange] = useState("warning")
	const [colorGreen, setColorGreen] = useState("success")


	const changeState1 = () => {
		if(colorRed === "danger"){
			setColorRed("danger glow")
			setColorOrange("warning")
			setColorGreen("success")
		} else {
			setColorRed("danger")
		}
	}

	const changeState2 = () => {
		if(colorOrange === "warning"){
			setColorOrange("warning glow")
			setColorRed("danger")
			setColorGreen("success")
		} else {
			setColorOrange("warning")
		}
	}

	const changeState3 = () => {
		if(colorGreen === "success"){
			setColorGreen("success glow")
			setColorRed("danger")
			setColorOrange("warning")
		} else {
			setColorGreen("success")
		}	
	}

	return (
		<div className="text-center">
			{/* Palo semaforo */}
			<div className={"rounded bg-black mx-auto"} style={{width:"12px", height:"100px"}}></div>
			{/* Contenedor luces */}
			<div className="rounded bg-black p-3 mx-auto" style={{width:"83px", height:"203px"}}>
				{/* red */}
				<div className={"rounded-circle m-1 bg-" + colorRed} style={{width:"50px", height:"50px"}} onClick={changeState1}></div>
				{/* orange */}
				<div className={"rounded-circle m-1 bg-" + colorOrange} style={{width:"50px", height:"50px"}} onClick={changeState2}></div>
				{/* green */}
				<div className={"rounded-circle m-1  bg-" + colorGreen} style={{width:"50px", height:"50px"}} onClick={changeState3}></div>
			</div>
		</div>
	);
};

export default Home;
