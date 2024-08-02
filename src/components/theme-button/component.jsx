import { Button } from "../button/components";
import { useTheme } from "../theme-context/hooks";

export const ThemeButton = () => {
  const { value, toggleTheme } = useTheme();

  return (
    <Button
      text={value === "light" ? "switch to dark" : "switch to light"}
      onClick={toggleTheme}
    />
  );
};
