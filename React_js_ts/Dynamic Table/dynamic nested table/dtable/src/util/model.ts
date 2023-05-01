export interface TableData {
  id: number;
  categoryname: string;
  tablename: string;
  types: { type: string }[];
}

export interface FormContent {
  tabletitle: string;
  category: string;
  type: { value: string }[];
}
