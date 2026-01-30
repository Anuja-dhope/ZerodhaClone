import React from 'react';
function Footer() {
    let iconStyles={fontSize:"20px",paddingLeft:"25px"};
    let headingStyles={color:"black",textAign:"center"};
    let listStyles={listStyleType:"none",margin:"0",padding:"0",paddingBottom:"25px",fontSize:"15px"};
    return ( 
        <div style={{background:"#fafafa",borderTop:"1px solid #f0f0f0",color:"grey"}}>
            <div style={{marginLeft:"200px",marginRight:"200px",marginTop:"50px",display:"grid",gridTemplateColumns:"repeat(5,1fr)",gap:"10px"}}>
                <div style={{fontSize:"13px"}}>
                    <img src='media/images/logo.svg' height={20}/>
                    <br></br><br></br>
                    <p>&copy; 2010-2025, Zerodha Broking Ltd.</p>
                    <p>All Rights Reserved.</p>
                    <div className='d-flex align-items-center'>
                        <i class="fa-brands fa-x-twitter" style={iconStyles}></i>
                        <i class="fa-brands fa-square-facebook" style={iconStyles}></i>
                        <i class="fa-brands fa-instagram" style={iconStyles}></i>
                        <i class="fa-brands fa-linkedin" style={iconStyles}></i>
                    </div>
                    <hr></hr>
                    <div className='d-flex align-items-center' style={{marginTop:"20px"}}>
                        <i class="fa-brands fa-youtube" style={iconStyles}></i>
                        <i class="fa-brands fa-whatsapp" style={iconStyles}></i>
                        <i class="fa-brands fa-telegram" style={iconStyles}></i>
                    </div>
                </div>
                <div>
                    <h6 style={headingStyles}>
                        Account
                    </h6>
                    <br></br>
                    <ul style={listStyles}>
                        <li>Open Demat Account</li>
                        <li>Minor Demat Account</li>
                        <li>NRI Demat Account</li>
                        <li>Commodity</li>
                        <li>Demeterialisation</li> 
                        <li>Fund Transfer</li>
                        <li>MTF</li>
                        <li>Referral Program</li>
                    </ul>
                </div>
                <div>
                    <h6 style={headingStyles}>
                        Support
                    </h6>
                    <br></br>
                    <ul style={listStyles}>
                        <li>Contact Us</li>
                        <li>Support Portal</li>
                        <li>How to file a Complaint?</li>
                        <li>Status of your Complaints</li>
                        <li>Bulletin</li>
                        <li>Circular</li>
                        <li>Z-connect Flag</li>
                        <li>Downloads</li>
                    </ul>
                </div>
                <div>
                    <h6 style={headingStyles}>
                        Company
                    </h6>
                    <br></br>
                    <ul style={listStyles}>
                        <li>About</li>
                        <li>Philosophy</li>
                        <li>Press & media</li>
                        <li>Careers</li>
                        <li>Zerodha cares(CSR)</li>
                        <li>Zerodha.tech</li>
                        <li>Open Source</li>
                    </ul>
                </div>
                <div>
                    <h6 style={headingStyles}>
                        Quick Links
                    </h6>
                    <br></br>
                    <ul style={listStyles}>
                        <li>Upcoming IPOs</li>
                        <li>Brokerage Charges</li>
                        <li>Market Holidays</li>
                        <li>Economic Calender</li>
                        <li>Calculators</li>
                        <li>Markets</li>
                        <li>Sectors</li>
                    </ul>
                </div>
            </div>
            <div style={{marginLeft:"200px",marginRight:"200px",marginTop:"50px", fontSize:"12px"}}>
                <p>Zerodha Broking Ltd.: Member of NSE, BSE​ &​ MCX – SEBI Registration no.: INZ000031633 CDSL/NSDL: Depository services through Zerodha Broking Ltd. – SEBI Registration no.: IN-DP-431-2019 Registered Address: Zerodha Broking Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. For any complaints pertaining to securities broking please write to <a href="" style={{textDecoration:"none"}}>complaints@zerodha.com</a>, for DP related to <a href='' style={{textDecoration:"none"}}>dp@zerodha.com</a>. Please ensure you carefully read the Risk Disclosure Document as prescribed by SEBI | ICF
                    <br></br><br></br>
                    Procedure to file a complaint on<a href='' style={{textDecoration:"none"}}>SEBI SCORES:</a>  Register on SCORES portal. Mandatory details for filing complaints on SCORES: Name, PAN, Address, Mobile Number, E-mail ID. Benefits: Effective Communication, Speedy redressal of the grievances
                    <br></br><br></br>
                    <a href='' style={{textDecoration:"none"}}>Smart Online Dispute Resolution | Grievances Redressal Mechanism</a>
                    <br></br><br></br>
                    Investments in securities market are subject to market risks; read all the related documents carefully before investing.
                    <br></br><br></br>
                    Attention investors: 1) Stock brokers can accept securities as margins from clients only by way of pledge in the depository system w.e.f September 01, 2020. 2) Update your e-mail and phone number with your stock broker / depository participant and receive OTP directly from depository on your e-mail and/or mobile number to create pledge. 3) Check your securities / MF / bonds in the consolidated account statement issued by NSDL/CDSL every month.
                    <br></br><br></br>
                    India's largest broker based on networth as per NSE. <a href='' style={{textDecoration:"none"}}>NSE broker factsheet</a>
                    <br></br><br></br>
                    "Prevent unauthorised transactions in your account. Update your mobile numbers/email IDs with your stock brokers. Receive information of your transactions directly from Exchange on your mobile/email at the end of the day. Issued in the interest of investors. KYC is one time exercise while dealing in securities markets - once KYC is done through a SEBI registered intermediary (broker, DP, Mutual Fund etc.), you need not undergo the same process again when you approach another intermediary." Dear Investor, if you are subscribing to an IPO, there is no need to issue a cheque. Please write the Bank account number and sign the IPO application form to authorize your bank to make payment in case of allotment. In case of non allotment the funds will remain in your bank account. As a business we don't give stock tips, and have not authorized anyone to trade on behalf of others. If you find anyone claiming to be part of Zerodha and offering such services, please<a href=''style={{textDecoration:"none"}}> create a ticket here</a>.
                    <br></br><br></br>
                    *Customers availing insurance advisory services offered by Ditto (Tacterial Consulting Private Limited | IRDAI Registered Corporate Agent (Composite) License No CA0738) will not have access to the exchange investor grievance redressal forum, SEBI SCORES/ODR, or arbitration mechanism for such products.
                </p>
            </div>
            <div>
                <ul style={{listStyle:"none",fontSize:"15px",display:"flex",justifyContent:"center",gap:"19px"}}>
                    <li>NSE</li>
                    <li>BSE</li>
                    <li>MCX</li>
                    <li>Terms & conditions</li>
                    <li>Policies & Procedures</li>
                    <li>Privacy Policy</li>
                    <li>Disclosure</li>
                    <li>For Investor's Attention</li>
                    <li>Investors Charter</li>
                </ul>
            </div>
        </div>
     );
}

export default Footer;