import React, { useState } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { TouchBackend } from "react-dnd-touch-backend";
import Column from "./Components/Column";
import MovableItem from "./Components/Card";
import { COLUMN_NAMES } from "./constants";
import { mock_tasks } from "./tasks";

import "./App.css";

const App = () => {
  const [items, setItems] = useState(mock_tasks);
  const isMobile = window.innerWidth < 600;

  const moveCardHandler = (dragIndex, hoverIndex) => {
    const dragItem = items[dragIndex];

    if (dragItem) {
      setItems((prevState) => {
        const coppiedStateArray = [...prevState];

        // remove item by "hoverIndex" and put "dragItem" instead
        const prevItem = coppiedStateArray.splice(hoverIndex, 1, dragItem);

        // remove item by "dragIndex" and put "prevItem" instead
        coppiedStateArray.splice(dragIndex, 1, prevItem[0]);

        return coppiedStateArray;
      });
    }
  };

  const returnItemsForColumn = (columnName) => {
    return items
      .filter((item) => item.column === columnName)
      .map((item, index) => (
        <MovableItem
          key={item.id}
          name={item.name}
          description={item.description}
          deadline={item.deadline}
          files={item.files}
          comments={item.comments}
          checklist={item.checklist}
          users={item.users}
          labelPriority={item.priority}
          currentColumnName={item.column}
          setItems={setItems}
          index={index}
          moveCardHandler={moveCardHandler}
        />
      ));
  };

  const { DO_IT, IN_PROGRESS, AWAITING_REVIEW, DONE } = COLUMN_NAMES;

  return (
    <>
      <div className="container">
        <DndProvider backend={isMobile ? TouchBackend : HTML5Backend}>
          <Column title={DO_IT} className="do-it-column">
            {returnItemsForColumn(DO_IT)}
          </Column>
          <Column title={IN_PROGRESS} className="in-progress-column">
            {returnItemsForColumn(IN_PROGRESS)}
          </Column>
          <Column title={AWAITING_REVIEW} className="awaiting-review-column">
            {returnItemsForColumn(AWAITING_REVIEW)}
          </Column>
          <Column title={DONE} className="done-column">
            {returnItemsForColumn(DONE)}
          </Column>
        </DndProvider>
      </div>
    </>
  );
};

export default App;
