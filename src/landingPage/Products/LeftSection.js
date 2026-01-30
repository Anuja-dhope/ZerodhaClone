import React from 'react';
function LeftSection({
    imageURL,
    title,
    description,
    tryDemo,
    learnMore,
    googlePlay,
    appStore
}) {
    return ( 
        <div style={{display:"grid",gridTemplateColumns:"65% 35%",gap:"50px",margin:"50px 200px",color:"#424242"}}>
            <div>
                <img src={imageURL}/>
            </div>
            <div>
                <br></br><br></br>
                <p style={{fontSize:"30px"}}>{title}</p>
                <p style={{fontSize:"20px"}}>{description}</p>
                <div>
                    <a href={tryDemo} style={{paddingRight:"100px",textDecoration:"none",fontSize:"18px"}}>Try Demo →</a>
                    <a href={learnMore} style={{textDecoration:"none",fontSize:"18px"}}>Learn More →</a>
                </div>
                <br></br>
                <div>
                    <a href={googlePlay} style={{paddingRight:"20px"}}><img src='media/images/googlePlayBadge.svg' alt='Google Play'height={50}/></a>
                    <a href={appStore}><img src='media/images/appstoreBadge.svg' alt='App Store' height={50}/></a>
                </div>
            </div>
        </div>
     );
}

export default LeftSection;