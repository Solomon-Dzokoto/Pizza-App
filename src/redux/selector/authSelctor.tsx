import { useSelector } from "react-redux";
import { RootState } from "../store/store";


export const authSelector = useSelector((state: RootState) => state.auth)