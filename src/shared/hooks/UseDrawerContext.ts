import { useContext } from "react"
import { DrawerContext } from "../contexts/DrawerContext"

export const UseDrawerContext = () =>{
  return useContext(DrawerContext);
}