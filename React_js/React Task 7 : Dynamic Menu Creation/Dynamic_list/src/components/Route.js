import { useState } from "react";
import Select from "./Select";

function Route({ handleInsertNode = () => { }, explorer }) {
  //const [expand, setExpand] = useState(false);
  const [showInput, setShowInput] = useState({
    visible: false,
    hasChield: false,
  });
  const [showSelectBox, setselectbox] = useState({
    visible: false,
    hasChield: false,
  });

  const handleNewFolder = (e, hasChield) => {
    e.stopPropagation();
    setShowInput({
      visible: true,
      hasChield,
    });
    setselectbox({
      visible: true,
    })
  };

  const onAddFolder = (e) => {
    if (e.keyCode === 13 && e.target.value) {
      handleInsertNode(explorer.id, e.target.value, showInput.hasChield);
      setShowInput({ ...showInput, visible: false });
    }
  };

  if (explorer.hasChield) {
    return (
      <>
        <div style={{ marginTop: 5 }} className="box">
          <div className="folder">
            <span>{explorer.name}</span>
            <div>
              <button onClick={(e) => handleNewFolder(e, true)}>Add</button>
            </div>
          </div>

          <div style={{ paddingLeft: 40 }}>
            {showInput.visible && (
              <div className="inputContainer">
                <span></span>
                <input
                  type="text"
                  className="inputContainer__input"
                  autoFocus
                  onKeyDown={onAddFolder}
                  onBlur={() => setShowInput({ ...showInput, visible: false })}
                />
              </div>
            )}

            {explorer.items.map((exp) => {
              return (
                <Route
                  handleInsertNode={handleInsertNode}
                  key={exp.id}
                  explorer={exp}
                />
              );
            })}
          </div>

        </div>
        <div>

        </div>
      </>



    );
  }
}

export default Route;
