import React from "react";
import {
  SelectWrapper,
  SelectPanel,
  SelectOverlay,
  SelectOption,
} from "./uiSelectStyles";
import { useState } from "react";
import { useRef } from "react";
import { useClickOutside } from "../../hooks/useClickOutside";

const UiSelect = ({ name, placeholder, options, handleChange }) => {
  const [opened, setToggleOpen] = useState(false);
  const [selectedOption, setSelected] = useState(null);
  const selectEl = useRef(null);

  const { current } = selectEl;
  const value = selectedOption && selectedOption.value;

  const openSelect = () => setToggleOpen(true);
  const closeSelect = () => setToggleOpen(false);

  const selectValue = (option) => {
    setSelected(option);
    handleChange({ name, value: option });
    closeSelect();
  };

  useClickOutside(current, () => closeSelect());

  return (
    <SelectWrapper ref={selectEl}>
      <SelectPanel visible={!opened} onClick={openSelect}>
        {!value ? (
          <span className="placeHolder">{placeholder || "Select Item"}</span>
        ) : (
          <span className="selectedItem"> {value} </span>
        )}
      </SelectPanel>

      <SelectOverlay visible={opened}>
        {options
          ? options.map((option, index) => {
              return (
                <SelectOption
                  className="selectOption"
                  key={index}
                  onClick={() => selectValue(option)}
                >
                  {option.value}
                </SelectOption>
              );
            })
          : ""}
      </SelectOverlay>
    </SelectWrapper>
  );
};

export default UiSelect;
