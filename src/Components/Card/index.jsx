import { useRef } from "react";
import { useDrag, useDrop } from "react-dnd";
import { COLUMN_NAMES } from "../../constants";
import UserAvatar from "../../svg/avatar.svg";
import "../../App.css";
import "../../../node_modules/@fortawesome/fontawesome-free/css/all.min.css";
/**
 * @param {{labelPriority: "baixa" | "media" | "alta"}} props
 * @returns
 */
const Card = ({
  index,
  name,
  description,
  deadline,
  files,
  comments,
  checklist,
  users,
  labelPriority,
  currentColumnName,
  moveCardHandler,
  setItems,
}) => {
  const hasActions =
    description !== "" ||
    deadline !== "" ||
    files.length > 0 ||
    comments.length > 0 ||
    checklist.length > 0 ||
    users.length > 0;

  const checkedQty = checklist.filter((check) => check.done).length;

  const changeItemColumn = (currentItem, columnName) => {
    setItems((prevState) => {
      return prevState.map((e) => {
        return {
          ...e,
          column: e.name === currentItem.name ? columnName : e.column,
        };
      });
    });
  };

  const ref = useRef(null);

  const [, drop] = useDrop({
    accept: "Our first type",
    hover(item, monitor) {
      if (!ref.current) {
        return;
      }
      const dragIndex = item.index;
      const hoverIndex = index;
      // Don't replace items with themselves
      if (dragIndex === hoverIndex) {
        return;
      }
      // Determine rectangle on screen
      const hoverBoundingRect = ref.current?.getBoundingClientRect();
      // Get vertical middle
      const hoverMiddleY =
        (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
      // Determine mouse position
      const clientOffset = monitor.getClientOffset();
      // Get pixels to the top
      const hoverClientY = clientOffset.y - hoverBoundingRect.top;
      // Only perform the move when the mouse has crossed half of the items height
      // When dragging downwards, only move when the cursor is below 50%
      // When dragging upwards, only move when the cursor is above 50%
      // Dragging downwards
      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return;
      }
      // Dragging upwards
      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return;
      }
      // Time to actually perform the action
      moveCardHandler(dragIndex, hoverIndex);
      // Note: we're mutating the monitor item here!
      // Generally it's better to avoid mutations,
      // but it's good here for the sake of performance
      // to avoid expensive index searches.
      item.index = hoverIndex;
    },
  });

  const [{ isDragging }, drag] = useDrag({
    type: "Our first type",
    item: { index, name, currentColumnName },
    end: (item, monitor) => {
      const dropResult = monitor.getDropResult();

      if (dropResult) {
        const { name } = dropResult;
        const { DO_IT, IN_PROGRESS, AWAITING_REVIEW, DONE } = COLUMN_NAMES;
        switch (name) {
          case IN_PROGRESS:
            changeItemColumn(item, IN_PROGRESS);
            break;
          case AWAITING_REVIEW:
            changeItemColumn(item, AWAITING_REVIEW);
            break;
          case DONE:
            changeItemColumn(item, DONE);
            break;
          case DO_IT:
            changeItemColumn(item, DO_IT);
            break;
          default:
            break;
        }
      }
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const opacity = isDragging ? 0.4 : 1;

  drag(drop(ref));

  return (
    <div ref={ref} className="card" style={{ opacity }}>
      <label
        className={
          labelPriority === "alta"
            ? "card-label --high-priority"
            : labelPriority === "media"
            ? "card-label --medium-priority"
            : labelPriority === "baixa" && "card-label --low-priority"
        }
      />

      <span className="card-name">{name}</span>

      {hasActions && (
        <div className="card-action-container">
          {description !== "" && (
            <div className="card-action-item">
              <i className="fas fa-align-left" />
            </div>
          )}

          {deadline !== "" && (
            <div className="card-action-item">
              <i className="far fa-clock" />
              {deadline}
            </div>
          )}

          {files.length > 0 && (
            <div className="card-action-item">
              <i className="fa fa-paperclip" />
            </div>
          )}
          {checklist.length > 0 && (
            <div
              className={
                checkedQty === checklist.length
                  ? "card-action-item --checklist-done"
                  : "card-action-item "
              }
            >
              <>
                <i className="far fa-check-square test"></i>
                <label htmlFor="">
                  {" "}
                  {checkedQty}/{checklist.length}
                </label>
              </>
            </div>
          )}
          {comments.length > 0 && (
            <div className="card-action-item">
              <i className="far fa-comment" />
              <label>{comments.length}</label>
            </div>
          )}
          {users.length > 0 && (
            <div className="card-action-item --users">
              {users.length < 4 ? (
                <>
                  {users.map((user) => (
                    <img
                      src={UserAvatar}
                      width={25}
                      height={25}
                      alt="User Avatar"
                    />
                  ))}
                </>
              ) : (
                <>
                  {users.map((user) => (
                    <img
                      src={UserAvatar}
                      width={18}
                      height={18}
                      alt="User Avatar"
                    />
                  ))}
                </>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Card;
