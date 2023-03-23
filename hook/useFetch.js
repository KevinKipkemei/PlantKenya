import { db } from "../firebaseConfig";
import { collection, getDocs } from "firebase/firestore";
import { useState, useEffect } from "react";


const useFetch = () => {

  const [result, setResult] = useState([]);
  const [isLoading, setisLoading] = useState(true);
  const [error, setError] = useState(null)

  //defining fetchData
  const fetchData = () => {
    getDocs(collection(db, "Projects"))
    .then((querySnapshot) => {
      const data = querySnapshot.docs.map((doc) => ({...doc.data(), id:doc.id}));
      setResult(data);
      setisLoading(false);
      setError(false)
    })
  }

  useEffect(() => {
    fetchData();
  }, [])

  return {result, error, isLoading}; 
  
  // return (
  //   <SafeAreaView style = {{ flex: 1}}>
  //     <View>
  //       {
  //         result?.map((item,i) => (
  //           <Text key= {i}>
  //             {item.Project_Name}
  //             {item.Number_Trees}
  //             {item.Date[Date]}
  //             {item.Description}
  //           </Text>
  //         ))
  //       }
  //     </View>
  //   </SafeAreaView>
  // )
}

export default useFetch;