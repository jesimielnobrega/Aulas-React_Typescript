import { BasePageLayout } from "../../layouts";
import { ListToolBar } from "../";

export const Dashboard: React.FC = () => {
  return (
  <BasePageLayout title="Página Inicial" toolBar={<ListToolBar ShowSearchField  />}>
    Testando
  </BasePageLayout>
  );
};
