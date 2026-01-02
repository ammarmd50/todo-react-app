import axios from "axios";

 export const getUserToken = async () => {
    
    try{
        const res = await axios.get(
      "http://localhost:3000/auth/me",
      {
        withCredentials: true,
      }
    );

    //console.log(res.data);

    return res.data.user;

    }
     catch (error) {
    console.error(error.response?.data );
    return null;
  }
};
 
