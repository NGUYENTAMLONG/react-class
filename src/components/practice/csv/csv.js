import React, { useState } from "react";
import { CSVLink } from "react-csv";
import Papa from "papaparse";
import { toast } from "react-toastify";

export default function CsvComponent({ users }) {
  const [file, setFile] = useState(null);
  const csvData = [
    ["#", "id", "Name", "Email"],
    ...users.map((user, index) => {
      return [index, user.id, user.first_name, user.email];
    }),
    [
      "Ahmed",
      "Tomi",
      "ah@smthing.co.com",
      {
        id: 1,
        name: "abc",
        type: false,
        ok: "false",
        arr: [
          {
            id: 23,
            title: "hehe",
          },
        ],
      },
    ],
    ["Raed", "Labes", "rl@smthing.co.com"],
    ["Yezzi", "Min l3b", "ymin@cocococo.com"],
  ];
  const handleChangeFile = (event) => {
    console.log(event.target.files);
    const fileList = event.target.files;
    if (fileList.length > 1) {
      toast("Cannot upload multiple files!", {
        icon: ({ theme, type }) => (
          <img
            src="/images/400.gif"
            width={"50px"}
            style={{ borderRadius: "5px" }}
            alt="gif"
          />
        ),
        autoClose: true,
      });
      return;
    } else {
      setFile(event.target.files[0]);
    }
  };
  const importCSV = () => {
    Papa.parse(file, {
      delimiter: "",
      chunkSize: 3,
      header: false,
      complete: function (responses) {
        console.log(responses);
        if (responses.data[0].length > 4) {
          alert("FALSE");
          return;
        }
        alert("OK");
      },
    });
  };
  return (
    <div>
      <span>
        {file && file.name}
        <button className="btn btn-primary mx-2" onClick={importCSV}>
          Update data now !
        </button>
      </span>
      <button className="btn btn-warning mx-3">
        <label htmlFor="import-input">Import CSV</label>
      </button>
      <input
        id="import-input"
        type="file"
        multiple={true}
        onChange={handleChangeFile}
        className="d-none"
      />

      <CSVLink
        data={csvData}
        className="btn btn-success"
        filename="users.csv"
        // headers={["#", "id", "Name", "Email"]}
      >
        <i className="fa-solid fa-file-arrow-down"></i>
      </CSVLink>
    </div>
  );
}
