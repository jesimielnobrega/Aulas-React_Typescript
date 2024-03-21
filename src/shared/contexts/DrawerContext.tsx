import { createContext, useCallback, useState } from "react";

interface IDrawerOptionData{
  icon: string;
  path: string;
  label: string;
}

interface IDrawerContextData {
  isDrawerOpen: boolean;
  toogleDrawer: () => void;
  drawerOptions: IDrawerOptionData[];
  handleSetDrawerOptions: ( drawerOptions: IDrawerOptionData[])=> void;
}
interface IDrawerProviderProps {
  children: React.ReactNode;
}

export const DrawerContext = createContext({} as IDrawerContextData);

export const DrawerProvider: React.FC<IDrawerProviderProps> = ({
  children,
}) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  
  const [drawerOptions, setDrawerOptions] = useState<IDrawerOptionData[]>([]);
  
  const handleSetDrawerOptions = useCallback(( drawerOptions: IDrawerOptionData[])=>{
    setDrawerOptions(drawerOptions);
  },[drawerOptions]);
  
  const toogleDrawer = useCallback(() => {
    setIsDrawerOpen((oldDrawerOpen) => !oldDrawerOpen);
  }, [isDrawerOpen]);

  return (
    <DrawerContext.Provider value={{ isDrawerOpen, toogleDrawer, drawerOptions,handleSetDrawerOptions }}>
      {children}
    </DrawerContext.Provider>
  );
};
