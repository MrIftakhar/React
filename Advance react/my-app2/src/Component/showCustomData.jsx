import React from 'react'
import useCustomHook from './useCustomHook';
const showCustomData=()=> {
  const [data] = useCustomHook("https://jsonplaceholder.typicode.com/users")
  return (
    <div>
        {data &&
        data.map((item)=> {
            return <p key={item.id}>{item.name + "company name " +  item.company.name}</p>
        })
        }
        </div>
  );
}

export default showCustomData;