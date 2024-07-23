import { type RadioChangeEvent } from "antd";

export enum State {
  "default" = "default",
  "hover" = "hover",
  "focus" = "focus",
  "disabled" = "disabled",
}

export interface RadioButtonProps {
  checked?: boolean;
  state?: State;
  showLabel?: boolean;
  showDescription?: boolean;
  label?: string;
  description?: string;
  onChange?: (event: RadioChangeEvent) => void;
}
