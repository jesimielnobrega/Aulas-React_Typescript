import {
  Avatar,
  Box,
  Divider,
  Drawer,
  Icon,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React from "react";
import { UseDrawerContext, useAppThemeContext } from "../../hooks";
import { useMatch, useNavigate, useResolvedPath } from "react-router-dom";
import { DarkMode } from "@mui/icons-material";

interface ISideBarProps {
  children: React.ReactNode;
}
interface IListItemProps {
  label: string;
  to: string;
  onClick: (() => void) | undefined;
  icon: string;
}

const ListItemLink: React.FC<IListItemProps> = ({
  label,
  to,
  onClick,
  icon,
}) => {
  const resolvedPath = useResolvedPath(to);

  const match = useMatch({ path: resolvedPath.pathname, end: false });

  const navigate = useNavigate();

  const handleClick = () => {
    onClick?.();
    navigate(to);
  };

  return (
    <ListItemButton onClick={handleClick} selected={!!match}>
      <ListItemIcon>
        <Icon>{icon}</Icon>
      </ListItemIcon>
      <ListItemText primary={label} />
    </ListItemButton>
  );
};

export const SideBar: React.FC<ISideBarProps> = ({ children }) => {
  const theme = useTheme();
  const smDown = useMediaQuery(theme.breakpoints.down("sm"));
  const { toogleDrawer, isDrawerOpen, drawerOptions } = UseDrawerContext();
  const { toogleTheme} = useAppThemeContext();
  const handleOnClick = () =>{
    toogleDrawer();
    toogleTheme();
  }
  return (
    <>
      <Drawer
        open={isDrawerOpen}
        variant={smDown ? "temporary" : "permanent"}
        onClose={toogleDrawer}
      >
        <Box width={theme.spacing(24)} display="flex" flexDirection="column" height="100%">
          <Box
            width="100%"
            height={theme.spacing(18)}
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Avatar
              sx={{ height: theme.spacing(12), width: theme.spacing(12) }}
              srcSet="https://i.pinimg.com/564x/b4/85/83/b485830cd5d029bf2a679ae207679452.jpg"
            />
          </Box>
          <Divider />
          <Box flex={1}>
            <List component="nav">
              {drawerOptions.map((drawerOption) => {
                return (
                  <ListItemLink
                    to={drawerOption.path}
                    icon={drawerOption.icon}
                    label={drawerOption.label}
                    onClick={smDown ? toogleDrawer : undefined}
                  />
                );
              })}
            </List>
          </Box>

          <Box>
            <List component="nav">
              <ListItemButton onClick={handleOnClick}>
                <ListItemIcon>
                  <DarkMode/>
                </ListItemIcon>
                <ListItemText primary="Trocar o tema"/>
              </ListItemButton>
            </List>
          </Box>
        </Box>
      </Drawer>
      <Box marginLeft={smDown ? 0 : theme.spacing(24)} height="100vh">
        {children}
      </Box>
    </>
  );
};
