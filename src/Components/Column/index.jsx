import { useDrop } from "react-dnd";
import { COLUMN_NAMES } from "../../constants";
import "../../App.css";

const Column = ({ children, className, title }) => {
  const [{ isOver, canDrop }, drop] = useDrop({
    accept: "Our first type",
    drop: () => ({ name: title }),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
    // Override monitor.canDrop() function
    canDrop: (item) => {
      const { DO_IT, IN_PROGRESS, AWAITING_REVIEW, DONE } = COLUMN_NAMES;
      const { currentColumnName } = item;
      return (
        currentColumnName === title ||
        (currentColumnName === DO_IT && title === IN_PROGRESS) ||
        (currentColumnName === IN_PROGRESS &&
          (title === DO_IT || title === AWAITING_REVIEW)) ||
        (currentColumnName === AWAITING_REVIEW &&
          (title === IN_PROGRESS || title === DONE)) ||
        (currentColumnName === DONE && title === AWAITING_REVIEW)
      );
    },
  });

  const getBackgroundColor = () => {
    if (isOver) {
      if (canDrop) {
        return "2px 2px 5px #ccc";
      } else if (!canDrop) {
        return "2px 2px 5px tomato";
      }
    } else {
      return "";
    }
  };

  return (
    <div
      ref={drop}
      className={"column " + className}
      style={{ boxShadow: getBackgroundColor() }}
    >
      <p className="column-title">{title}</p>
      {children}
    </div>
  );
};

export default Column;
