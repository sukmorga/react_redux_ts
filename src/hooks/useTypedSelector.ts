import { TypedUseSelectorHook, useSelector } from "react-redux";
import { RootSate } from "../store/redusers";



export const useTypedSelector: TypedUseSelectorHook<RootSate> = useSelector;
