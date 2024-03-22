import { Add, ArrowBack, Delete, Save } from "@mui/icons-material";
import {
  Box,
  Button,
  ButtonGroup,
  Divider,
  MenuList,
  Paper,
  Skeleton,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import SplitButton from "../splitButton/SplitButton";

interface IDetailToolBarProps {
  newButtonText?: string;

  showNewButton?: boolean;
  showDeleteButton?: boolean;
  showSaveButton?: boolean;
  showReturnButton?: boolean;
  showSaveReturnButton?: boolean;

  OnNewButtonClick?: () => void;
  OnDeleteButtonClick?: () => void;
  OnReturnButtonClick?: () => void;
  OnSaveButtonClick?: () => void;
  OnSaveReturnButtonClick?: () => void;
}

export const DetailToolBar: React.FC<IDetailToolBarProps> = ({
  newButtonText = "Novo",

  showNewButton = true,
  showDeleteButton = true,
  showReturnButton = true,
  showSaveButton = true,
  showSaveReturnButton = false,

  OnNewButtonClick,
  OnDeleteButtonClick,
  OnReturnButtonClick,
  OnSaveButtonClick,
  OnSaveReturnButtonClick,
}) => {

  const theme = useTheme();
  const smDown = useMediaQuery(theme.breakpoints.down("sm"));
  const mdDown = useMediaQuery(theme.breakpoints.down("md"));
  const lastScreenSize = useMediaQuery(theme.breakpoints.down(428));
  const firstScreenSize = useMediaQuery(theme.breakpoints.down(732));

  const options =["Salvar","Apagar","Voltar","Novo"];
  const ButtonsEvents = [
    ()=>{
      alert("Salvando")
    },
    ()=>{
      alert("Apagando")
    },
    ()=>{
      alert("Voltando")
    },
    ()=>{
      alert("Criando")
    }
  ]

  const handleGroupButtonClick = (text: string) =>{
    options.map((value, index)=>{
      text === value ? ButtonsEvents[index]() : undefined;
    })
  }
  return (
    <Box
      display="flex"
      height={theme.spacing(5)}
      padding={1}
      paddingX={2}
      alignItems="center"
      gap={2}
      marginX={1}
      component={Paper}
      justifyContent={!lastScreenSize ? "space-between": "center"}
    >
      {lastScreenSize && (
        <SplitButton options={options} onButtonClick={(text)=>handleGroupButtonClick(text)}/>
      )}
      {(showSaveButton && !lastScreenSize)  && (
        <Button
          startIcon={<Save />}
          variant="contained"
          disableElevation
          onClick={OnSaveButtonClick}
        >
          <Typography
            variant="button"
            whiteSpace="nowrap"
            textOverflow="ellipsis"
            overflow="hidden"
          >
            {!lastScreenSize ?"Salvar": undefined}
          </Typography>
        </Button>
      )}
      {(showSaveReturnButton && !mdDown && !smDown) && (
        <Button
          startIcon={<Save />}
          variant="outlined"
          disableElevation
          onClick={OnSaveReturnButtonClick}
        >
           <Typography
            variant="button"
            whiteSpace="nowrap"
            textOverflow="ellipsis"
            overflow="hidden"
          >
            Salvar e voltar
          </Typography>
        </Button>
      )}
      {(showDeleteButton && !lastScreenSize)  && (
        <Button
          startIcon={<Delete />}
          variant="outlined"
          disableElevation
          onClick={OnDeleteButtonClick}
        >
           <Typography
            variant="button"
            whiteSpace="nowrap"
            textOverflow="ellipsis"
            overflow="hidden"
          >
            Apagar
          </Typography>
        </Button>
      )}
      {(showNewButton && !firstScreenSize && !smDown )&& (
        <Button
          startIcon={<Add />}
          variant="outlined"
          disableElevation
          onClick={OnNewButtonClick}
        >
           <Typography
            variant="button"
            whiteSpace="nowrap"
            textOverflow="ellipsis"
            overflow="hidden"
          >
            {newButtonText}
          </Typography>
        </Button>
      )}
      {(showReturnButton && !lastScreenSize)   && (
        <>
          <Divider variant="middle" orientation="vertical" />
          <Button
            startIcon={<ArrowBack />}
            variant="outlined"
            disableElevation
            onClick={OnReturnButtonClick}
          >
             <Typography
            variant="button"
            whiteSpace="nowrap"
            textOverflow="ellipsis"
            overflow="hidden"
          >
            Voltar
          </Typography>
          </Button>
        </>
      )}
    </Box>
  );
};
