import { DeleteFilled, DeleteOutlined } from "@ant-design/icons";
import { Button, Input, Modal } from "antd";
import { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { FormProps } from "../util/Model";

export default function TableProp(props: FormProps) {
  const [editbtn, setEditbtn] = useState(0);
  const [formdata, setFormdata] = useState({ category: "", type: "" });
  const [openCategory, setOpen] = useState(false);
  const [openType, setOpenType] = useState(false);
  const handleOpenCategory = () => setOpen(true);
  const handleCloseCategory = () => setOpen(false);
  const handleOpenType = () => setOpenType(true);
  const handleCloseType = () => setOpenType(false);
  const [prevState, setPrevState] = useState(props.item);
  const data: any = ["No data available"];

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
                  <DeleteFilled onClick={() => deleteRow(index)}></DeleteFilled>
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

  // const handleOk = () => {
  //   addNewRow();
  // };

  function addNewRow(e: any) {
    e.preventDefault();
    const updatedItem = {
      ...props.item,
      categories: [
        ...props.item.categories,
        {
          category: formdata.category,
          values: props.item.types.map((it: { type: string }) => {
            return { typeName: it.type, typeValue: 0 };
          }),
        },
      ],
    };
    const updatedTableData = props.tabledata.map((tableItem: any) =>
      tableItem.id === props.item.id ? updatedItem : tableItem
    );
    props.setTableData(updatedTableData);
    handleCloseCategory();
  }

  function addNewType(e: any) {
    e.preventDefault();
    const updatedValues = props.item.types.concat({ type: formdata.type });
    const updatedCategories = props.item.categories.map((category: any) => {
      return {
        category: category.category,
        values: category.values.concat({
          typeName: formdata.type,
          typeValue: 0,
        }),
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
      <br />

      <DataTable
        columns={columns}
        data={props.item.categories.length === 0 ? data : props.item.categories}
        highlightOnHover
        customStyles={customStyles}
      />
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
                <Input
                  className="table-data"
                  type="number"
                  value={parseFloat(
                    props.item.categories[rindex]?.values[index]?.typeValue || 0
                  )}
                  disabled={editbtn === 0 ? true : false}
                  onChange={(e) => updateRow(e, rindex, index)}
                />
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
      <Modal
        style={{ padding: "25px" }}
        className="modal1"
        open={openCategory}
        onCancel={handleCloseCategory}
      >
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

          <button type="submit">Create</button>
        </form>
      </Modal>
      {/* //Type Dialog */}
      <Modal
        closable={false}
        footer={null}
        open={openType}
        onCancel={handleCloseType}
      >
        <form onSubmit={(e) => addNewType(e)}>
          <Input
            autoFocus
            id="name"
            type="text"
            onChange={(e) => setFormdata({ ...formdata, type: e.target.value })}
            required
          />

          <button type="submit">Create</button>
        </form>
      </Modal>
    </>
  );
}
