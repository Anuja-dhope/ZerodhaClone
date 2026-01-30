import React from 'react';

function OtherPeople() {
    return ( 
        <div style={{margin:"50px 200px",color:"#424242"}}>
            <h4>Charges Explained</h4><br></br>
            <div style={{display:"grid",gridTemplateColumns:"50% 50%",gap:"50px"}}>
                <div>
                    <h6>Securities/Commodities transaction tax</h6><br></br>
                    <p style={{fontSize:"12px"}}>Tax by the government when transacting on the exchanges. Charged as above on both buy and sell sides when trading equity delivery. Charged only on selling side when trading intraday or on F&O.
                    <br></br><br></br>
                    When trading at Zerodha, STT/CTT can be a lot more than the brokerage we charge. Important to keep a tab.</p>

                    <h6>Transaction/Turnover Charges</h6><br></br>
                    <p style={{fontSize:"12px"}}>Charged by exchanges (NSE, BSE, MCX) on the value of your transactions.

                    <br></br><br></br>BSE has revised transaction charges in XC, XD, XT, Z and ZP groups to ₹10,000 per crore w.e.f 01.01.2016. (XC and XD groups have been merged into a new group X w.e.f 01.12.2017)

                    <br></br><br></br>BSE has revised transaction charges in SS and ST groups to ₹1,00,000 per crore of gross turnover.

                    <br></br><br></br>BSE has revised transaction charges for group A, B and other non exclusive scrips (non-exclusive scrips from group E, F, FC, G, GC, W, T) at ₹375 per crore of turnover on flat rate basis w.e.f. December 1, 2022.

                    <br></br><br></br>BSE has revised transaction charges in M, MT, TS and MS groups to ₹275 per crore of gross turnover.</p>
                </div>
                <div>
                    <h6>GST</h6><br></br>
                    <p style={{fontSize:"12px"}}>Tax levied by the government on the services rendered. 18% of ( brokerage + SEBI charges + transaction charges)
                    <br></br><br></br>
                    SEBI Charges
                    <br></br><br></br>
                    Charged at ₹10 per crore + GST by Securities and Exchange Board of India for regulating the markets.</p>
                    <h6>DP (Depository participant) charges</h6><br></br>
                    <p style={{fontSize:"12px"}}>₹15.34 per scrip (₹3.5 CDSL fee + ₹9.5 Zerodha fee + ₹2.34 GST) is charged on the trading account ledger when stocks are sold, irrespective of quantity.

                    <br></br><br></br>Female demat account holders (as first holder) will enjoy a discount of ₹0.25 per transaction on the CDSL fee.

                    <br></br><br></br>Debit transactions of mutual funds & bonds get an additional discount of ₹0.25 on the CDSL fee.

                    <br></br><br></br>Pledging charges

                    <br></br><br></br>₹30 + GST per pledge request per ISIN.</p>
                </div>
            </div>
            <div>
                <br></br>
                <h6>Desclaimer</h6>
                <p style={{fontSize:"12px"}}>For Delivery based trades, a minimum of ₹0.01 will be charged per contract note. Clients who opt to receive physical contract notes will be charged ₹20 per contract note plus courier charges. Brokerage will not exceed the rates specified by SEBI and the exchanges. All statutory and regulatory charges will be levied at actuals. Brokerage is also charged on expired, exercised, and assigned options contracts. Free investments are available only for our retail individual clients. Companies, Partnerships, Trusts, and HUFs need to pay 0.1% or ₹20 (whichever is less) as delivery brokerage. A brokerage of 0.25% of the contract value will be charged for contracts where physical delivery happens. For netted off positions in physically settled contracts, a brokerage of 0.1% will be charged.</p>
            </div>
        </div>
     );
}

export default OtherPeople;