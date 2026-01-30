import React from 'react';
function RightSection({
    title,
    description,
    link,
    learnText,
    imageURL
}) {
    return ( 
        <div style={{display:"grid",gridTemplateColumns:"35% 65%",gap:"50px",margin:"50px 200px",color:"#424242"}}>
            <div>
                <br></br><br></br><br></br><br></br><br></br>
                <p style={{fontSize:"30px"}}>{title}</p>
                <p style={{fontSize:"20px"}}>{description}</p>
                <a href={link} style={{paddingRight:"100px",textDecoration:"none",fontSize:"18px"}}>{learnText}</a>
            </div>
            <div>
                <img src={imageURL}/>
            </div>
        </div>
     );
}

export default RightSection;