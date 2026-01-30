// import React from 'react';
// import React, { useState } from "react";

// function Support() {
//     return ( 
//         <div style={{background:"#f0f0f0"}}>
//             <div style={{margin:"0px 200px 20px 200px",display:"flex",justifyContent:"space-between",alignItems:"center",paddingTop:"30px"}}>
//                 <h3>Support Portal</h3>
//                 <button className='btn btn-primary'>My Tickets</button>
//             </div>
//             <div style={{padding:"20px 200px 50px 200px"}}>
//                 {/* <div style={{background:"white",padding:"5px",border:"1px solid #f1f1f1", boxShadow:"2px 2px 2px gray",borderRadius:"8px",height:"70px", display:"flex", alignItems:"center"}}>
//                     <i class="fa-solid fa-magnifying-glass" style={{color:"grey",margin:"0px 10px 0px 10px"}}></i>
//                     <input placeholder='Eg:How do I open My account,How do I activate F&O...' style={{border:"1px solid white",width:"90%"}} onClick={{border:"1px solid white"}}></input>
//                 </div> */}
//                 <i
//           className="fa-solid fa-magnifying-glass"
//           style={{ color: "grey", margin: "0px 10px" }}
//         ></i>
//         <input
//           placeholder="Eg: How do I open My account, How do I activate F&O..."
//           style={{
//             border: clicked ? "1px solid blue" : "1px solid white",
//             width: "90%",
//             outline: "none",
//           }}
//           onClick={() => setClicked(true)}
//         />

//             </div>
//         </div>
//      );
// }

// export default Support;

import React, { useState } from "react";

function Support() {
  const [clicked, setClicked] = useState(false);

  return (
    <div style={{ background: "#f0f0f0" }}>
      {/* Header */}
      <div
        style={{
          margin: "0px 200px 20px 200px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          paddingTop: "30px",
        }}
      >
        <h3>Support Portal</h3>
        <button className="btn btn-primary">My Tickets</button>
      </div>

      {/* Search Bar */}
      <div style={{ padding: "20px 200px 50px 200px" }}>
        <div
          style={{
            background: "white",
            padding: "5px",
            border: "1px solid #f1f1f1",
            boxShadow: "2px 2px 2px gray",
            borderRadius: "8px",
            height: "70px",
            display: "flex",
            alignItems: "center",
          }}
        >
          <i
            className="fa-solid fa-magnifying-glass"
            style={{ color: "grey", margin: "0px 10px" }}
          ></i>
          <input
            placeholder="Eg: How do I open My account, How do I activate F&O..."
            style={{
              border: clicked ? "1px solid white" : "1px solid white",
              width: "90%",
              outline: "none",
            }}
            onClick={() => setClicked(true)}
          />
        </div>
      </div>
    </div>
  );
}

export default Support;