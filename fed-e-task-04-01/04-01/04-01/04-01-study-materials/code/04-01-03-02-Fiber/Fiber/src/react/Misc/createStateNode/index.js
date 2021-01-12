import { createDOMElement } from "../../DOM"
import { createReactInstance } from "../createReactInstance"

const createStateNode = fiber => {
  if (fiber.tag === "host_component") {
    console.log('fiber', fiber)
    return createDOMElement(fiber)
  } else {
    return createReactInstance(fiber)
  }
}

export default createStateNode
