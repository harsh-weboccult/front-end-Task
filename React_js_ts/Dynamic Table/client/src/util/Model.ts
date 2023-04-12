export interface TableData {
  id: number;
  categoryname: string;
  tablename: string;
  categories: {
    category: string;
    values: { typeName: string; typeValue: number }[];
  }[];
  types: { type: string }[];
}
export interface FormContent {
  tabletitle: string;
  category: string;
  type: { value: string }[];
}

export type FormProps = {
  tablename: string;
  item: any;
  formdata: any;
  tabledata: any;
  setTableData: Function;
};
