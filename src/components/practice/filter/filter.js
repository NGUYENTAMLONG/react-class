import React, { useState } from "react";
import { InputGroup } from "react-bootstrap";

export default function Filter(props) {
  const { handleFilter } = props;
  const [filterText, setFilerText] = useState("");
  const handleChangeFilter = (event) => {
    setFilerText(event.target.value);
    handleFilter(event.target.value);
  };
  return (
    <div>
      <InputGroup>
        <input
          className="form-control mb-3"
          type="text"
          value={filterText}
          onChange={(event) => handleChangeFilter(event)}
          placeholder="Searching ..."
        />
      </InputGroup>
    </div>
  );
}
