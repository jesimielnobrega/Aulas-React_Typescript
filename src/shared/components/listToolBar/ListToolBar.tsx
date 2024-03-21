import { Add } from "@mui/icons-material";
import { Box, Button, Paper, TextField, useTheme } from "@mui/material";

interface IListToolBarProps {
  OnNewButtonClick?: () => void;
  NewButtonText?: string;
  ShowNewButton?: boolean;
  SearchText?: string;
  OnSearchTextChange?: (newText: string) => void;
  ShowSearchField?: boolean;
}

export const ListToolBar: React.FC<IListToolBarProps> = ({
  OnNewButtonClick,
  OnSearchTextChange,
  SearchText = "",
  NewButtonText = "Novo",
  ShowNewButton = true,
  ShowSearchField = false,
}) => {
  const theme = useTheme();
  return (
    <Box
      display="flex"
      height={theme.spacing(5)}
      padding={1}
      paddingX={2}
      alignItems="center"
      justifyContent="space-between"
      marginX={1}
      component={Paper}
    >
      {ShowSearchField && (
        <TextField
          size="small"
          placeholder="Pesquisar..."
          value={SearchText}
          onChange={(e) => OnSearchTextChange?.(e.target.value)}
        />
      )}
      {ShowNewButton && (
        <Button
          endIcon={<Add />}
          variant="contained"
          disableElevation
          onClick={OnNewButtonClick}
        >
          {NewButtonText}
        </Button>
      )}
    </Box>
  );
};
