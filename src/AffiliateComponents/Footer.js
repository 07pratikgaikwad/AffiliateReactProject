import React, { useEffect } from 'react'
import { useState } from 'react'
import MaterialTable from 'material-table'
import axios from 'axios'
export const Footer = () => {



  const [tempdata,setTempdata] = useState([]);
  const [finalData,setFinalData] = useState([]);
  


  useEffect(() => {
   
    var axios = require('axios');
var data = '';

var config = {
  method: 'post',
   //url: 'http://localhost:51923/Api/Affiliate/AffDoctorPatientlist',
  url:'https://welcomecure.com/DataProvider/API/Affiliate/AffDoctorPatientlist',

  headers: { 
    'UserName': 'WelcomeWebApi', 
    'Password': 'welcomecure123', 
    'Authorization': 'Basic WDVPMFgxSDIwSWo3WjI2WXJhanowZGFpcmNpczczbnk3MjNmYzlUM3U3WktaTnZIaW5WbmNTbWt0V1FuM3BYQTdUd1hWZ2d6ckNkOlRVakxoTzVqNGFOM1V0bzYydDkzaHZ5ZDlNNktEUg=='
  },
  data : data
};

axios(config)
.then(function (response) {
  // console.log(JSON.stringify(response.data.Data.AccessToken));
  setTempdata(response.data.Data.AccessToken)
})
.catch(function (error) {
  console.log(error);
});


////doctor List
var axios = require('axios');
var data = JSON.stringify({
  "StartRow": 0,
  "PageSize": 100000,
  "SearchText1": "",
  "SearchText2": "",
  "SearchText3":"",
  "SearchText4":"",
  "_ContactType":"",
  "UserId": 1222290
});

var config = {
  method: 'post',
  //url: 'http://localhost:51923/Api/Affiliate/AffDoctorPatientlist',
  url: 'https://welcomecure.com/DataProvider/API/Affiliate/AffDoctorPatientlist',
  headers: { 
    'Content-Type': 'application/json', 
    'UserName': 'WelcomeWebApi', 
    'Password': 'welcomecure123', 
    'AccessToken': {tempdata}
  },
  data : data
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
  setFinalData(response.data.Data)
})
.catch(function (error) {
  console.log(error);
});



  }, [])
  const columns=[
    {title:"Patient Name",field:"Name"},
    {title:"Patient Reg No.",field:"PatientNo"},
    {title:"Email Id",field:"EmailId"},
    {title:"Mobile No.",field:"MobileNo"}
] 
    return(
      <>
      <MaterialTable
            title="Doctor Patients List"
            data={finalData}
            columns={columns}
            options={{
                search:true,
                filtering:true,
                exportButton:true
            }}
            />
      
      </>
    )
  

  // const printData = finalData.map((i) => {
  //   return(
  //     <>
  //     <table>
  //       <tbody>
  //       <tr>
          
  //         <td>{i.Name}  -- </td>
  //         <td>{i.PatientNo} -- </td>
  //         <td>{i.EmailId} </td>
  //         <td>{i.MobileNo} </td>
  //       </tr>
  //       </tbody>
        
  //     </table> 
  //     </>
  //   )
  // })
  



   
    



//   return (
//     // <div className="col-sm-6 offset-sm-3">
//     //   <h2 className="text-center"> Fetch Data through Welcome Login</h2>
// <>
// <div>
// <h1>Welcome Cure Affiliate Api Data</h1>
// </div>
//       <h6>{printData}</h6>
// </>



      
      // <div ></div>
      //{/* <button className="btn btn-primary" onClick={loginfetch}> Login and Get Details</button> */}
      //{/* <h1 className="text-center">Fetch Data From Get Api Url</h1>
      //   {
      //     setDataApi.data123?
      //     setDataApi.data123.map((item,i)=>
      //     <div>
      //       <p>{i}---
      //       {item.CountryName} {item.CountryId}----
      //       </p>
      //     </div>
      //     )
      //     :null
      //   }
      //  */}
    // </div>
  // )
}
