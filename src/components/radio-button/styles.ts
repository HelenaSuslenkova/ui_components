import { style } from "typestyle";
import { State } from "./types";

import { ThemeConfig } from "antd/es/config-provider/context";

export const defaultTextStyle = {
  fontWeight: 500,
};

export const mediumTextStyle = {
  ...defaultTextStyle,
  fontSize: "0.875rem",
  lineHeight: "1rem",
  letterSpacing: "-0.031rem",
};

export const smallTextStyle = {
  ...defaultTextStyle,
  fontSize: "0.75rem",
  lineHeight: "0.875rem",
  letterSpacing: "-0.016rem",
};

export const getRadioButtonStyles = (theme: ThemeConfig, state: string) => {
  return {
    radioWrapperStyle: (state: State) =>
      style({
        cursor: state === State.disabled ? "not-allowed" : "pointer",
        position: "relative",
        minWidth: "100px",
      }),
    radioStyle: style({
      $nest: {
        ".ant-radio-inner": {
          borderColor: theme.token?.colorPrimary,
        },
        ".ant-radio:hover .ant-radio-inner": {
          borderColor: theme.token?.colorPrimaryHover,
        },

        ".ant-radio-checked:hover .ant-radio-inner": {
          borderColor: theme.token?.colorPrimaryHover,
          backgroundColor: theme.token?.colorPrimaryHover,
        },
        ".ant-radio-input:focus + .ant-radio-inner": {
          borderColor: theme.token?.colorBorder,
        },
        ".ant-radio-input:focus:checked + .ant-radio-inner": {
          borderColor: theme.token?.colorPrimaryHover,
        },
        ".ant-radio-input:disabled + .ant-radio-inner": {
          borderColor: "transparent",
          backgroundColor: theme.token?.colorBgContainerDisabled,
        },
        ".ant-radio-input:hover:disabled + .ant-radio-inner": {
          backgroundColor: theme.token?.colorBgContainerDisabled,
        },
        ".ant-radio-input:focus + .ant-radio-inner::before": {
          content: '""',
          position: "absolute",
          top: "-4px",
          left: "-4px",
          right: "-4px",
          bottom: "-4px",
          border: `2px solid ${theme.token?.colorPrimary}`,
          borderRadius: "50%",
          opacity: 0.6,
        },
      },
    }),

    radioDescriptionStyle: style({
      ...smallTextStyle,
      color: theme.token?.colorTextSecondary,
      marginTop: "0.25rem",
      position: "absolute",
      top: "100%",
      left: "24px",
    }),
    radioLabelStyle: style({
      ...mediumTextStyle,
      display: "flex",
      alignItems: "center",
    }),
    radioHoveredStyle: style({
      $nest: {
        ".ant-radio .ant-radio-inner": {
          borderColor: theme.token?.colorPrimaryHover,
        },

        ".ant-radio-checked .ant-radio-inner": {
          borderColor: theme.token?.colorPrimaryHover,
          backgroundColor: theme.token?.colorPrimaryHover,
        },
      },
    }),
    radioFocusedStyle: style({
      $nest: {
        ".ant-radio-input + .ant-radio-inner": {
          borderColor: theme.token?.colorBorder,
        },
        ".ant-radio-input:checked + .ant-radio-inner": {
          borderColor: theme.token?.colorPrimary,
        },
        ".ant-radio-input + .ant-radio-inner::before": {
          content: '""',
          position: "absolute",
          top: "-4px",
          left: "-4px",
          right: "-4px",
          bottom: "-4px",
          border: `2px solid ${theme.token?.colorPrimary}`,
          borderRadius: "50%",
          opacity: 0.6,
        },
      },
    }),
  };
};
