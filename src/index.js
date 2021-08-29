import React from "react"
import ReactDom from "react-dom"

const element = <h1>Hello World, меня зовут Анна Зубкова</h1>

console.log(element)
ReactDom.render(element, document.getElementById('root'))