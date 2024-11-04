"use client";
import { DarkMode, LightMode } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { useColorScheme } from "@mui/material/styles";

export default function ThemeSwitcher() {
    const { mode, setMode } = useColorScheme();

    return (
        <IconButton
            onClick={() => {
                setMode(mode === "dark" ? "light" : "dark");
            }}
        >
            <LightMode
                sx={(theme) => ({
                    ...theme.applyStyles("light", {
                        display: "none",
                    }),
                })}
            />
            <DarkMode
                sx={(theme) => ({
                    ...theme.applyStyles("dark", {
                        display: "none",
                    }),
                })}
            />
        </IconButton>
    );
}