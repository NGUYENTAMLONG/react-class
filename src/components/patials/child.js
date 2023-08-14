import React from "react";

class MyChildComponent extends React.Component {
  deleteUser = (userId) => {
    this.props.deleteFunction(userId);
  };
  render() {
    // const lastName = this.props.lname;
    // const firstName = this.props.fname;
    const { fname, ...rest } = this.props;
    return (
      <>
        <b>Here:{fname}</b>
        <b>Here:{rest.lname}</b>
        <h1>PEOPLES</h1>
        {this.props.peoples.map((elm, index) => {
          return (
            <div key={elm.id}>
              <b>id: </b>
              {elm.id} - <b>name: </b>
              {elm.name} - <b>age: </b>
              {elm.age} - <b>gender: </b>
              {elm.gender} |{" "}
              <button
                style={{ cursor: "pointer" }}
                onClick={() => {
                  this.deleteUser(elm.id);
                }}
              >
                X
              </button>
              <hr />
            </div>
          );
        })}
      </>
    );
  }
}

// export default MyChildComponent;
// const MyChildComponent = (props) => {
//   const { fname, ...rest } = props;
//   console.log(props, rest);
//   return (
//     <>
//       <b>Here:{props.fname}</b>
//       <b>Here:{rest.lname}</b>
//       <h1>PEOPLES</h1>
//       {props.peoples.map((elm, index) => {
//         return (
//           <div key={elm.id}>
//             <b>name:</b>
//             {elm.name}
//             <b>age:</b>
//             {elm.age}
//             {/* <b>gender:</b>
//               {elm.gender}
//               <b>age:</b>
//               {elm.age} */}
//           </div>
//         );
//       })}
//     </>
//   );
// };
export default MyChildComponent;
