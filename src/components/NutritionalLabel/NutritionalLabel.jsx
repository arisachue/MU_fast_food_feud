import * as React from "react"
import { nutritionFacts } from "../../constants"
import "./NutritionalLabel.css"

export function NutritionalLabel(props) {
  return (
    <div className="nutritional-label">
      <h3 className="title">Nutrition Facts</h3>

      <h4 className="item-name">{props.item.item_name}</h4>

      <ul className="fact-list">{
        nutritionFacts.map((nurFact) => (
          <NutritionalLabelFact key={nurFact.id} label={nurFact.label} attribute={nurFact.attribute} item={props.item}/>
        ))
      }</ul>
    </div>
  )
}

export function NutritionalLabelFact(props) {
  var curItem = props.item
  var curAttribute = props.attribute
  console.log("attribute", curAttribute)
  console.log("nutrifact item", curItem)
  return (
    <li className="nutrition-fact">
      <span className="fact-label">{props.label}</span>{" "}
      <span className="fact-value">{curItem[curAttribute]}</span>
    </li>
  )
}

export default NutritionalLabel
