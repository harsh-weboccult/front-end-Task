
import { useState } from 'react';
import './App.css';
import data from './Data'
let count=1;
function App() {
  const [fileData, setFileData] = useState([{ id: 0, value: "", child: [] }]);

  const [titleData, setTitleData] = useState("");


  //Add  Parent function
  const addParent = () => {
    setFileData([...fileData, { id: fileData.length, value: "", child: [] }]);
    // console.log(fileData);
  }

  //Add Child Function
  const addChild = (e, id) => {
    const newData = fileData.map((ele) => {
     count= count+1;
      if (ele.id === id) {
        ele.child.push(
          {
            id: ele.id + "." +count,
            Subtitle: "",
            value: " "
          });
        return ele;
      }
      else {
        return ele;
      }

    })
    setFileData(newData);
  }

  //Update Parent
  const handleSubmit = (perentId) => {
    console.log(perentId);
    setFileData(fileData.map((ele) => (
      ele.id === perentId ? { ...ele, value: titleData } : ele
    )))
    console.log(fileData);
  }


  //Update Child Function
  const updateSubtitle = (e, ChildId, ParentId) => {
    const sdata = [...fileData]
    sdata.map((ele) => {
      if (ele.id === ParentId) {
        ele.child.map((element) => {
          if (element.id === ChildId) {
            element.Subtitle = e.target.value;
          }
        })
      }
    })
    setFileData(sdata);
    console.log("updated", sdata);
  }
  const updatetitle = (e, ChildId, ParentId) => {
    const vdata = [...fileData]
    vdata.map((ele) => {
      if (ele.id === ParentId) {
        ele.child.map((element) => {
          if (element.id === ChildId) {
            element.value = e.target.value;
          }
        })
      }
    })
    setFileData(vdata);
    console.log("vupdated", vdata);
  }


  //Delete Child Function
  const deleteChild = (ChildId, ParentId) => {
    const ddata = [...fileData];

    ddata.map((ele) => {
      if (ele.id === ParentId) {
           const newData = ele.child.filter((element) =>
            element.id !== ChildId
        )
        console.log("new List",newData);
        ele.child=newData;
      }
    })
    setFileData(ddata);
    console.log("deleted", ddata);
  }


  console.log(data);
  return (
    <>
      <div className="row">
        <div className="left">
          <button type='button' onClick={() => addParent()} className='btn-add'>Add more</button>
          {
            fileData.map(item => (
              <div key={item.id} className="title">
                <div className="box">
                  <div className="parent">
                    <input type="text" onChange={(e) => setTitleData(e.target.value)} />
                    <button className='btn-child' onClick={(e) => addChild(e, item.id)}>Add Child</button>
                    <button className='btn-submit' onClick={(e) => handleSubmit(item.id)}>Submit</button>
                  </div>
                  {item.child.length > 0 &&
                    <>
                      <div className="child">
                        {item.child.map(element =>
                        (
                          <div key={element.id}>
                            <input type="text" name="subtitle" id="" onChange={(e) => updateSubtitle(e, element.id, item.id)} />
                            <input type="text" name="value" id="" onChange={(e) => updatetitle(e, element.id, item.id)} />
                            <button className='btn-delete' onClick={(e) => deleteChild(element.id, item.id)}>Delete</button>
                          </div>

                        ))}

                      </div>
                    </>}
                   </div>

              </div>
            ))
          }

        </div>
        <div className="right">
          <h1>Specification</h1>
          {
            fileData.map(item => (
              <div key={item.id} className="title">
                <h3>{item.value}</h3>
                {item.child.length > 0 &&
                  <>
                    <table className='table_value' border={1}>
                      {item.child.map(element =>
                      (
                        <tr key={element.id}>
                          <td >{element.Subtitle}</td>
                          <td>{element.value}</td>
                        </tr>
                      ))}
                    </table>

                  </>}

              </div>
            ))
          }
        </div>
      </div>
    </>
  );
}

export default App;
