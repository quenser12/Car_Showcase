import { MouseEventHandler } from "react";

export interface CustomButtonProps {
    title: string;
    containerStyles?: string; //question mark meaning optional
    handleClick?: 
    MouseEventHandler<HTMLButtonElement>
    btnType?: "button" | "submit";
}