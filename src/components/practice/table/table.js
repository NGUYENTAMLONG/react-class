import axios from "axios";
import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import { deleteUser, fetchAllUser } from "../../../services/user-service";
import Pagination from "react-bootstrap/Pagination";
import ReactPaginate from "react-paginate";
import { Button } from "react-bootstrap";
import EditUser from "../edit/edit";
import Confirm from "../delete/confirm";
import Filter from "../filter/filter";
import _ from "lodash";
import { CSVDownload, CSVLink } from "react-csv";
import CsvComponent from "../csv/csv";
export default function TableUser(props) {
  // const { newUser } = props;
  const [users, setUsers] = useState([]);
  const [paginate, setPaginate] = useState({});
  const [itemOffset, setItemOffset] = useState(0);
  const [isShowConfirm, setIsShowConfirm] = useState(false);
  const [userDeleteId, setUserDeleteId] = useState("");
  const [toggleSort, setToggleSort] = useState(true);
  const [sort, setSort] = useState("");
  const [toggleSortId, setToggleSortId] = useState(true);
  const [sortId, setSortId] = useState("");
  // if (newUser) {
  //   setUsers([newUser, ...users]);
  // }
  const getUsers = async (page) => {
    try {
      const res = await fetchAllUser(page);
      if (res && res.data) {
        setUsers(res.data);
        setPaginate({
          page: res.page,
          total: res.total,
          total_pages: res.total_pages,
          per_page: res.per_page,
        });
        // setItemOffset(res.page);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUsers(1);
    // if (newUser) {
    //   setUsers([newUser, ...users]);
    // }
  }, []);

  //   const endOffset = itemOffset + paginate.per_page;
  //   console.log(itemOffset);
  //   const currentItems = paginate.total.slice(itemOffset, endOffset);
  //   const pageCount = Math.ceil(paginate.total.length / paginate.per_page);

  const handlePageClick = (event) => {
    getUsers(event.selected + 1);
    // const newOffset = (event.selected * paginate.per_page) % paginate.total;
    // console.log(newOffset);
    // setUsers(newOffset);
  };
  const handleDelete = async (userId) => {
    try {
      const res = await deleteUser(userId);
      if (res.status === 204) {
        setUsers([...users.filter((user) => user.id !== userId)]);
      }
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    const newUsers = users.sort((a, b) => {
      return sort
        ? a.first_name.localeCompare(b.first_name)
        : b.first_name.localeCompare(a.first_name);
    });
    console.log(newUsers);
    setUsers([...newUsers]);
  }, [sort]);
  useEffect(() => {
    const newUsers = users.sort((a, b) => {
      return sortId ? a.id - b.id : b.id - a.id;
    });
    setUsers([...newUsers]);
  }, [sortId]);
  const handleUpdate = async (payloadUpdate) => {
    try {
      const { userId, name } = payloadUpdate;
      const foundIndex = users.findIndex((user) => user.id === userId);
      const foundUser = users.find((user) => user.id === userId);
      foundUser.first_name = name;
      const updatedUser = foundUser;
      users.splice(foundIndex, 1, updatedUser);
      setUsers([...users]);
    } catch (error) {
      console.log(error);
    }
  };
  const handleConfirmDelete = (userId) => {
    setIsShowConfirm(true);
    setUserDeleteId(userId);
  };
  const handleFilter = _.debounce((payload) => {
    console.log(payload);
    if (payload === "") {
      getUsers(1);
    }
    const filteredUsers = users.filter((user) => {
      return (
        user.first_name.includes(payload) ||
        user.last_name.includes(payload) ||
        user.email.includes(payload)
      );
    });
    setUsers([...filteredUsers]);
  }, 2000);
  const handleClose = () => setIsShowConfirm(false);
  const csvData = [
    ["#", "id", "Name", "Email"],
    ...users.map((user, index) => {
      return [index, user.id, user.first_name, user.email];
    }),
    // ["Ahmed", "Tomi", "ah@smthing.co.com"],
    // ["Raed", "Labes", "rl@smthing.co.com"],
    // ["Yezzi", "Min l3b", "ymin@cocococo.com"],
  ];
  console.log(csvData);
  return (
    <>
      <Filter handleFilter={handleFilter} />
      <CsvComponent users={users} />
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>#</th>
            <th className="d-flex justify-content-between align-items-center">
              <span>id</span>
              {toggleSortId ? (
                <i
                  className="fa-solid fa-sort"
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    setToggleSortId(false);
                    setSortId(true);
                    setToggleSort(true);
                  }}
                ></i>
              ) : (
                <i
                  className={
                    sortId
                      ? "fa-solid fa-arrow-down-1-9"
                      : "fa-solid fa-arrow-up-1-9"
                  }
                  style={{ cursor: "pointer" }}
                  onClick={() => setSortId(!sortId)}
                ></i>
              )}
            </th>
            <th>Avatar</th>
            <th className="d-flex justify-content-between align-items-center">
              <span>Name</span>
              {toggleSort ? (
                <i
                  className="fa-solid fa-sort"
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    setToggleSort(false);
                    setSort(true);
                    setToggleSortId(true);
                  }}
                ></i>
              ) : (
                <i
                  className={
                    sort
                      ? "fa-solid fa-arrow-up-z-a"
                      : "fa-solid fa-arrow-down-z-a"
                  }
                  style={{ cursor: "pointer" }}
                  onClick={() => setSort(!sort)}
                ></i>
              )}
            </th>
            <th>Email</th>
            <th>Handle</th>
          </tr>
        </thead>
        <tbody>
          {users.length &&
            users.map((user, index) => {
              return (
                <tr key={user.id}>
                  <td>{index + 1}</td>
                  <td>{user.id}</td>
                  <td>
                    <img src={user.avatar} />
                  </td>
                  <td>
                    {user.first_name}
                    {/* {user.last_name} */}
                  </td>
                  <td>{user.email}</td>
                  <td>
                    {/* <Button variant="warning">EDIT</Button>{" "} */}
                    <EditUser user={user} handleUpdate={handleUpdate} />
                    <Button
                      variant="danger"
                      // onClick={() => handleDelete(user.id)}
                      onClick={() => handleConfirmDelete(user.id)}
                    >
                      DELETE
                    </Button>
                  </td>
                </tr>
              );
            })}
        </tbody>
        <Confirm
          isShowConfirm={isShowConfirm}
          handleClose={handleClose}
          handleDelete={handleDelete}
          userId={userDeleteId}
        />
        {/* <Pagination>{items}</Pagination> */}
        <ReactPaginate
          breakLabel="..."
          nextLabel="next >"
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          previousLabel="< previous"
          renderOnZeroPageCount={null}
          breakClassName="page-item"
          breakLinkClassName="page-link"
          pageCount={paginate.total_pages}
          marginPagesDisplayed={2}
          containerClassName="pagination justify-content-center"
          pageClassName="page-item"
          pageLinkClassName="page-link"
          previousClassName="page-item"
          previousLinkClassName="page-link"
          nextClassName="page-item"
          nextLinkClassName="page-link"
          activeClassName="active"
        />
        <br />
      </Table>
      {/* <CSVDownload data={csvData} target="_blank" /> */}
    </>
  );
}
