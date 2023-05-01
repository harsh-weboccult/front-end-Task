import {
  DeleteFilled,
  DeleteOutlined,
  PlusCircleOutlined,
} from "@ant-design/icons";
import { Button, Form, Input, Modal } from "antd";
import { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { FormProps } from "../util/Model";
import FormItem from "antd/es/form/FormItem";

let count = 0;
export default function TableProp(props: FormProps) {
  const [editbtn, setEditbtn] = useState(0);
  const [formdata, setFormdata] = useState({ category: "", type: "" });
  const [openCategory, setOpen] = useState(false);
  const [openType, setOpenType] = useState(false);
  const [openSubCategory, setOpenSubCategory] = useState(false);
  const handleOpenCategory = () => setOpen(true);
  const handleCloseCategory = () => setOpen(false);
  const handleOpenType = () => setOpenType(true);
  const handleCloseType = () => setOpenType(false);
  const [prevState, setPrevState] = useState(props.item);
  const [form] = Form.useForm();

  const data: any = ["No data available in this category"];

  var columns: any = [];

  {
    props.item.categories.length !== 0
      ? (columns = [
          {
            name: props.item.categoryname,
            selector: (row: any) => row.category,
            cell: (row: any, index: any) => (
              <>
                {row.category}
                {editbtn === 1 && (
                  <div className="input-row">
                    <DeleteFilled
                      onClick={() => deleteRow(index)}
                    ></DeleteFilled>
                    <PlusCircleOutlined onClick={() => addNewSubRow(row)} />
                  </div>
                )}
              </>
            ),
          },
        ])
      : (columns = [
          {
            name: props.item.categoryname,
            selector: (row: any) => row.category,
            cell: (row: any) => <>No Data available</>,
          },
        ]);
  }

  const setEditList = () => {
    setEditbtn(1);
  };

  function addNewRow(e: any) {
    count = count + 1;
    e.preventDefault();
    const updatedItem = {
      ...props.item,
      categories: [
        ...props.item.categories,
        {
          id: props.item.id + count,
          category: formdata.category,
          values: props.item.types.map((it: { type: string }) => {
            return { typeName: it.type, typeValue: 0 };
          }),
          Subcategory: [],
        },
      ],
    };
    const updatedTableData = props.tabledata.map((tableItem: any) =>
      tableItem.id === props.item.id ? updatedItem : tableItem
    );
    props.setTableData(updatedTableData);
    setFormdata({ ...formdata, category: "  " });
    handleCloseCategory();
  }

  function addNewSubRow(row: any) {
    console.log(row, "row");
    count = count + 1;
    const updatedItem = {
      ...props.item,
      categories: props.item.categories.map((category: any) => {
        if (category.id === row.id) {
          return {
            ...category,
            Subcategory: [
              ...category.Subcategory,
              {
                id: count + 90,
                category: formdata.category,
                values: props.item.types.map((it: { type: string }) => ({
                  typeName: it.type,
                  typeValue: 0,
                })),
                subcategories: [],
              },
            ],
          };
        } else {
          return category;
        }
      }),
    };
    const updatedTableData = props.tabledata.map((tableItem: any) =>
      tableItem.id === props.item.id ? updatedItem : tableItem
    );
    props.setTableData(updatedTableData);
    setFormdata({ ...formdata, category: "  " });
    handleCloseCategory();
  }

  function addNewType() {
    // e.preventDefault();
    const updatedValues = props.item.types.concat({ type: formdata.type });
    const updatedCategories = props.item.categories.map((category: any) => {
      return {
        category: category.category,
        values: category.values.concat({
          typeName: formdata.type,
          typeValue: 0,
        }),
        Subcategory: [],
      };
    });
    const updatedItem = {
      ...props.item,
      types: updatedValues,
      categories: updatedCategories,
    };
    const updatedTableData = props.tabledata.map((tableItem: any) =>
      tableItem.id === props.item.id ? updatedItem : tableItem
    );
    props.setTableData(updatedTableData);
    setFormdata({ ...formdata, type: "" });
    form.resetFields();
    handleCloseType();
  }

  function deleteCol(idx: number) {
    const updatedfilteredItem = props.item.types.filter(
      (item: any, index: number) => index !== idx
    );

    const updatedCategories = props.item.categories.map((category: any) => {
      return {
        category: category.category,
        values: category.values.filter(
          (item: any, index: number) => index !== idx
        ),
      };
    });

    const updatedItem = {
      ...props.item,
      types: updatedfilteredItem,
      categories: updatedCategories,
    };

    const updatedTableData = props.tabledata.map((tableItem: any) =>
      tableItem.id === props.item.id ? updatedItem : tableItem
    );
    props.setTableData(updatedTableData);
  }

  function deleteRow(idx: any) {
    const updatedfilteredItem = props.item.categories.filter(
      (item: any, index: number) => index !== idx
    );
    const updatedItem = {
      ...props.item,
      categories: updatedfilteredItem,
    };
    const updatedTableData = props.tabledata.map((tableItem: any) =>
      tableItem.id === props.item.id ? updatedItem : tableItem
    );
    props.setTableData(updatedTableData);
  }

  function updateRow(e: any, ridx: any, idx: any) {
    const updatedCategories = props.item.categories.map(
      (category: any, categoryIndex: number) => {
        if (categoryIndex === ridx) {
          const updatedValues = category.values.map(
            (value: any, valueIndex: number) => {
              if (valueIndex === idx) {
                return {
                  ...value,
                  typeValue: e.target.value,
                };
              }
              return value;
            }
          );
          return {
            ...category,
            values: updatedValues,
          };
        }
        return category;
      }
    );
    const updatedItem = {
      ...props.item,
      categories: updatedCategories,
    };
    const updatedTableData = props.tabledata.map((tableItem: any) =>
      tableItem.id === props.item.id ? updatedItem : tableItem
    );
    props.setTableData(updatedTableData);
  }

  function cancelEdit() {
    setEditbtn(0);

    const updatedTableData = props.tabledata.map((tableItem: any) =>
      tableItem.id === props.item.id ? prevState : tableItem
    );
    props.setTableData(updatedTableData);
  }

  function saveEdit() {
    setEditbtn(0);
    setPrevState(props.item);
  }

  const customStyles = {
    headCells: {
      style: {
        background: "#00a786",
        color: "white",
        fontSize: "15px",
      },
    },
    cells: {
      style: {
        paddingLeft: "8px",
        paddingRight: "8px",
        fontSize: "12px",
      },
    },
  };

  console.log(props.tabledata);

  const deletetable = () => {
    const udata = props.tabledata.filter(
      (element: any) => element.id !== props.item.id
    );

    props.setTableData(udata);
  };
  return (
    <>
      <div className="table-header">
        <div className="flex">
          <h1 className="table-heading">
            {props.tablename}{" "}
            {editbtn === 1 && (
              <>
                <DeleteFilled
                  style={{ color: "red" }}
                  onClick={() => deletetable()}
                >
                  delete
                </DeleteFilled>
              </>
            )}
          </h1>

          {editbtn === 1 && (
            <div>
              <Button
                className="edit-btn"
                onClick={handleOpenCategory}
                color="secondary"
              >
                Add Category Row
              </Button>
              <Button className="edit-btn" onClick={() => handleOpenType()}>
                Add New Type
              </Button>
              <Button
                className="edit-btn"
                onClick={() => saveEdit()}
                color="success"
              >
                Save
              </Button>
              <Button
                className="edit-btn"
                onClick={() => cancelEdit()}
                color="error"
              >
                Cancel
              </Button>
            </div>
          )}

          {editbtn === 0 && (
            <Button className="edit-btn" onClick={setEditList}>
              Edit
            </Button>
          )}
        </div>
      </div>
      <br />
      <div className="table-Footer">
        <DataTable
          columns={columns}
          data={
            props.item.categories.length === 0 ? data : props.item.categories
          }
          highlightOnHover
          customStyles={customStyles}
        />
      </div>

      {/* this set input feild category */}
      {props.item.categories.length !== 0
        ? props.item.types.forEach((iitem: any, index: number) => {
            columns.push({
              name: (
                <p style={{ alignItems: "center", display: "flex" }}>
                  <p style={{ width: "100px", overflow: "auto" }}>
                    {iitem.type}
                  </p>
                  {editbtn === 1 && (
                    <DeleteFilled
                      style={{ color: "white" }}
                      onClick={() => deleteCol(index)}
                    >
                      delete
                    </DeleteFilled>
                  )}
                </p>
              ),
              selector: (row: any) => row.iitem.type,
              cell: (row: any, rindex: any) => (
                <>
                  <p className="table-data">0</p>
                </>
              ),
            });
          })
        : props.item.types.forEach((iitem: any, index: number) => {
            columns.push({
              name: (
                <p style={{ alignItems: "center", display: "flex" }}>
                  <p style={{ width: "100px", overflow: "auto" }}>
                    {iitem.type}
                  </p>
                  {editbtn === 1 && (
                    <DeleteFilled
                      aria-label="delete"
                      color="error"
                      onClick={() => deleteCol(index)}
                    >
                      delete
                    </DeleteFilled>
                  )}
                </p>
              ),
            });
          })}
      {/* //Category Dialog */}
      <Modal style={{ padding: "25px" }} className="modal1" footer={null}>
        <form onSubmit={(e: any) => addNewRow(e)}>
          <Input
            autoFocus
            id="name"
            type="text"
            value={formdata.category}
            onChange={(e) =>
              setFormdata({ ...formdata, category: e.target.value })
            }
            required
          />

          <Button htmlType="submit">Create</Button>
        </form>
      </Modal>
      {/* //Type Dialog */}
      <Modal footer={null} open={openType} onCancel={handleCloseType}>
        <Form
          form={form}
          onFinish={() => {
            addNewType();
            form.resetFields();
          }}
        >
          <FormItem>
            <Input
              autoFocus
              name="type"
              id="name"
              type="text"
              value={formdata.type}
              onChange={(e) =>
                setFormdata({ ...formdata, type: e.target.value })
              }
              required
            />
          </FormItem>

          <Button htmlType="submit">Create</Button>
        </Form>
      </Modal>

      <Modal footer={null} open={openSubCategory} onCancel={handleCloseType}>
        <Form
          form={form}
          onFinish={() => {
            addNewType();
            form.resetFields();
          }}
        >
          <FormItem>
            <Input
              autoFocus
              name="type"
              id="name"
              type="text"
              value={formdata.type}
              onChange={(e) =>
                setFormdata({ ...formdata, type: e.target.value })
              }
              required
            />
          </FormItem>

          <Button htmlType="submit">Create</Button>
        </Form>
      </Modal>
    </>
  );
}
