import { Menu } from "@mui/icons-material";
import {
  Box,
  IconButton,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { UseDrawerContext } from "../../hooks";

interface IBasePageLayoutProps {
  children: React.ReactNode;
  title: string;
  toolBar?: React.ReactNode;
}

export const BasePageLayout: React.FC<IBasePageLayoutProps> = ({
  children,
  title,
  toolBar,
}) => {
  const theme = useTheme();
  const smDown = useMediaQuery(theme.breakpoints.down("sm"));
  const mdDown = useMediaQuery(theme.breakpoints.down("md"));
  const { toogleDrawer } = UseDrawerContext();
  return (
    <Box height="100%" display="flex" flexDirection="column" gap={2}>
      <Box
        display="flex"
        alignItems="center"
        height={theme.spacing(smDown ? 6 : mdDown ? 8 : 12)}
        padding={1}
        gap={2}
      >
        {smDown && (
          <IconButton style={{ borderRadius: 10 }} onClick={toogleDrawer}>
            <Menu />
          </IconButton>
        )}
        <Typography
          whiteSpace="nowrap"
          overflow="hidden"
          textOverflow="ellipsis"
          variant={smDown ? "h5" : mdDown ? "h4" : "h3"}
        >
          {title}
        </Typography>
      </Box>
      <Box>{toolBar}</Box>
      <Box flex={1} overflow="auto">
        {children}
      </Box>
    </Box>
  );
};
