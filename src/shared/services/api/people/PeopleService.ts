import { Environment } from "../../../environments";
import { Api } from "../axios-config";

interface IListPeople {
  id: string;
  nomeCompleto: string;
  email: string;
  cidadeId: number;
}

interface IListPeopleForUpdate {
  nomeCompleto?: string;
  email?: string;
  cidadeId?: number;
}

interface IAllPeopleAndCount {
  data: IListPeople[];
  totalCount: number;
}

const getAll = async (
  page = 1,
  filter = ""
): Promise<IAllPeopleAndCount | Error> => {
  try {
    const relativeUrl = `/pessoas?_page=${page}&_limit=${Environment.lINES_lIMIT}&nomeCompleto_like=${filter}`;

    const { data, headers } = await Api.get<IListPeople[]>(relativeUrl);

    if (data) {
      return {
        data,
        totalCount: headers["x-total-count"] || Environment.lINES_lIMIT,
      };
    }

    return new Error("Erro ao consultar os dados");
  } catch (error) {
    console.log(error);
    return new Error(
      (error as { message: string }).message || "Erro ao consultar os dados"
    );
  }
};

const getById = async (id: string): Promise<IListPeople | Error> => {
  try {
    const { data } = await Api.get<IListPeople>(`/pessoas/${id}`);

    return data;
  } catch (error) {
    console.log(error);
    return new Error(
      (error as { message: string }).message || "Erro ao consultar o registro"
    );
  }
};

const deleteById = async (id: string): Promise<undefined | Error> => {
  try {
    await Api.delete<IListPeople>(`/pessoas/${id}`);
  } catch (error) {
    console.log(error);
    return new Error(
      (error as { message: string }).message || "Erro ao eliminar os dados"
    );
  }
};

const create = async (
  dataToCreate: Omit<IListPeople, "id">
): Promise<string | Error> => {
  try {
    const { data } = await Api.post<IListPeople>("/pessoas", dataToCreate);
    return data.id;
  } catch (error) {
    console.log(error);
    return new Error(
      (error as { message: string }).message || "Erro ao criar o registro"
    );
  }
};

const updateById = async (
  id: string,
  dataToUpdate: IListPeopleForUpdate
): Promise<IListPeople | Error> => {
  try {
    const { data } = await Api.patch<IListPeople>(
      `/pessoas/${id}`,
      dataToUpdate
    );

    return data;
  } catch (error) {
    console.log(error);
    return new Error(
      (error as { message: string }).message || "Erro ao atualizar os dados"
    );
  }
};

export const PeopleService = {
  create,
  deleteById,
  updateById,
  getById,
  getAll,
};
