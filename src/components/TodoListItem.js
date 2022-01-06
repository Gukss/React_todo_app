import React from "react";
import {
    MdCheckBoxOutlineBlank,
    MdCheckBox,
    MdRemoveCircleOutline,
} from "react-icons/md";
import cn from "classnames";
import "./TodoListItem.scss";

const TodoListItem = ({ todo, onRemove, onToggle }) => {
    {
        /*이름을 같게 적어줘야 한다. text를 textt로 하면 안된다.*/
    }
    const { id, text, checked } = todo;
    return (
        <div className="TodoListItem">
            <div
                className={cn("checkbox", { checked })}
                onClick={() => onToggle(id)}
            >
                {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
                <div className="text">{text}</div>
            </div>
            <div className="remove">
                <MdRemoveCircleOutline onClick={() => onRemove(id)} />
            </div>
        </div>
    );
};

export default TodoListItem;
