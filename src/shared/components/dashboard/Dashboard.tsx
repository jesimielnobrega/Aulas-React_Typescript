import { BasePageLayout } from "../../layouts";
import { ListToolBar } from "../";
import { DetailToolBar } from "../detailToolBar/DetailToolBar";

export const Dashboard: React.FC = () => {
  return (
  <BasePageLayout 
    title="Página Inicial" 
    toolBar={<DetailToolBar showSaveReturnButton  />}>
    Testando
  </BasePageLayout>
  );
};
