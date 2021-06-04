import React,{useEffect,useState} from "react";

const index = () => {
    const [userData, setUserData] = useState({
        '':''
      })
    
      useEffect(() => {
        setUserData(JSON.parse(sessionStorage.getItem('userData')))
      }, [])
    return (
        <div>
            <h1>{userData.Name}</h1>
            <div>
                <h3>Personal Information</h3>
                <p>Dni: {userData.Dni}</p>
            </div>
        </div>
    )
}

export default index
