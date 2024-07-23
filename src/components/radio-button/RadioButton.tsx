import { FC } from "react";
import { Radio, Typography } from "antd";
import { useTheme } from "styled-components";

import { getRadioButtonStyles } from "./styles";
import { RadioButtonProps, State } from "./types";

const DEF_RADIO_LABEL = "Radio label";
const DEF_RADIO_DESCRIPTION = "Description";

export const RadioButton: FC<RadioButtonProps> = ({
  checked = false,
  state = State.default,
  showLabel = true,
  showDescription = false,
  label = DEF_RADIO_LABEL,
  description = DEF_RADIO_DESCRIPTION,
  onChange,
  ...rest
}) => {
  const theme = useTheme();
  const {
    radioWrapperStyle,
    radioStyle,
    radioLabelStyle,
    radioDescriptionStyle,
    radioHoveredStyle,
    radioFocusedStyle,
  } = getRadioButtonStyles(theme, state);

  return (
    <div className={radioWrapperStyle(state)}>
      <Radio
        // className={radioStyle}
        className={`${radioStyle} ${state === State.hover && radioHoveredStyle} ${state === State.focus && radioFocusedStyle}`}
        checked={checked}
        disabled={state === State.disabled}
        onChange={onChange}
        {...rest}
      >
        {showLabel && <span className={radioLabelStyle}>{label}</span>}

        {showDescription && (
          <Typography.Text className={radioDescriptionStyle}>
            {description}
          </Typography.Text>
        )}
      </Radio>
    </div>
  );
};
