import theme from "styled-theming";

export const backgroundColor = theme("mode", {
  day: "var(--day-background)",
  night: "var(--night-background)",
});

export const inlineCodeBackgroundColor = theme("mode", {
  day: "var(--day-code-background)",
  night: "var(--night-code-background)",
});

export const highlightColor = theme("mode", {
  day: "var(--day-highlight)",
  night: "var(--night-highlight)",
});

export const primaryTextColor = theme("mode", {
  day: "var(--day-text-primary)",
  night: "var(--night-text-primary)",
});

export const secondaryTextColor = theme("mode", {
  day: "var(--day-text-secondary)",
  night: "var(--night-text-secondary)",
});
