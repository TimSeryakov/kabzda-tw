import React, {useState} from 'react';
import {Rating, RatingValueType} from "./components/Rating/Rating";
import OnOff from "./components/OnnOff/OnOff";
import Accordion from "./components/Acrordion/Acordion";

function App() {
  console.log("App rendered")

  const [ratingValue, setRatingValue] = useState<RatingValueType>(0)
  const [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(true )
  const [value, setOnOffValue] = useState<boolean>(false);

  return (
      <div className="bg-gray-400 h-full">
        <div className="grid place-content-center text-center h-full"   >

          {/*
            <UncontrolledAccordion titleValue={"Menu"} />
            <UncontrolledAccordion titleValue={"Users"} />

            <UncontrolledRating/>*/}

          <OnOff value={value} setOnOffValue={() => setOnOffValue(!value)}/>

          <Rating value={ratingValue} onStarClick={setRatingValue}/>

          <Accordion titleValue={"Menu"} collapsed={accordionCollapsed}
                     onclick={() => setAccordionCollapsed(!accordionCollapsed)}/>
        </div>
      </div>


  );
}

export default App;
