import { getDefaultNormalizer } from "@testing-library/react";
import { createContext } from "react";

export const EditingContext = createContext()

export const RoundsContext = createContext()

export const CurrentRoundContext = createContext()

export const ToolContext = createContext()

export const ColorContext = createContext()

export const BackgroundColorContext = createContext()

export default { EditingContext, RoundsContext, CurrentRoundContext, ColorContext, BackgroundColorContext }