import React from "react";
import redHeart from './assets/img/heart-red.png'
import whiteHeart from './assets/img/heart-white.png'

export type RatingValueType = 0 | 1 | 2 | 3 | 4| 5;


export type RatingPropsValue = {
    value: RatingValueType
    onStarClick: (t: RatingValueType) => void
};

export function Rating(props: RatingPropsValue) {

    return (
        <div className="mb-16">
            <Star selected={props.value > 0} onStarClick={props.onStarClick} value={1}/>
            <Star selected={props.value > 1} onStarClick={props.onStarClick} value={2}/>
            <Star selected={props.value > 2} onStarClick={props.onStarClick} value={3}/>
            <Star selected={props.value > 3} onStarClick={props.onStarClick} value={4}/>
            <Star selected={props.value > 4} onStarClick={props.onStarClick} value={5}/>
        </div>
    )
}

type StarPropsType = {
    selected: boolean
    onStarClick: (t: RatingValueType) => void
    value: RatingValueType
}

function Star(props: StarPropsType) {

    return (
          <span className="cursor-pointer" onClick={() => props.onStarClick(props.value)}>
          {props.selected ? <img src={redHeart} alt={"1"} className="inline-block w-16 h-16 p-1"/> : <img src={whiteHeart} alt={"0"} className="inline-block w-16 h-16 p-1"/> }</span>
    )

}