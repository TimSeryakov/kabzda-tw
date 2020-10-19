import React, {useState} from 'react';
import {Rating, RatingValueType} from "./components/Rating/Rating";
import {OnOff} from "./components/OnOff/OnOff";
import {Accordion} from './components/Accordion/Accordion';
import {Select} from "./components/Select/Select";

function App() {
  const [ratingValue, setRatingValue] = useState<RatingValueType>(0)
  const [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(true )
  const [onOffValue, setOnOffValue] = useState<boolean>(false);
  const AccordionItems = [
      {title: "Cандерс Баскет оригинальный", value: 1},
      {title: "Шефбургер де Люкс оригинальный", value: 2},
      {title: "Твистер оригинальный", value: 3}
      ]
  const [selectValue, setSelectValue] = useState("1")
  const [selectValue2, setSelectValue2] = useState(null)

  return (
      <div className="bg-gray-400 h-full">
        <div className="grid place-content-center text-center h-full">

          <div className="mb-20 text-left flex justify-between">
            <Select
                onChange={setSelectValue}
                value={selectValue}
                items={[
                  {value: "1", title: "Minsk"},
                  {value: "2", title: "Moscow"},
                  {value: "3", title: "Kiev"},
                  {value: "4", title: "London"},
                  {value: "5", title: "Praha"},
                ]}
            />

            <Select
                onChange={setSelectValue2}
                value={selectValue2}
                items={[
                  {value: "1", title: "Minsk"},
                  {value: "2", title: "Moscow"},
                  {value: "3", title: "Kiev"},
                  {value: "4", title: "London"},
                  {value: "5", title: "Praha"},
                ]}
            />

          </div>

          <OnOff value={onOffValue} setOnOffValue={() => setOnOffValue(!onOffValue)}/>
          <Rating value={ratingValue} onStarClick={setRatingValue}/>
          <Accordion titleValue={"Menu"}
                     collapsed={accordionCollapsed}
                     onChange={() => setAccordionCollapsed(!accordionCollapsed)}
                     items={AccordionItems}
                     onClickFn={() => {}}
          />

      </div>
      </div>


  );
}

export default App;
