import * as S from './styles/TableStyle'
import Item from './Item'
import { useState, useEffect } from 'react';

export default function Table(props){
    const [passwords, setPasswords] = useState(" ")


    // Recupera os dados no firebase
    useEffect(()=>{
        props.itemsRef.on("value", gotData, errData);
    },[])

    function gotData(data){
        setPasswords(data.val())
      }
    
      function errData(err){
        console.log(err)
      }
    return(
        <S.Table>
                {(passwords !== " ") && (passwords !== null) ? 
                Object.entries(passwords).map((password)=>{
                    return <Item removeItem={props.removeItem} key={password[0]} id={password[0]} name={password[1]['name']} password={password[1]['password']}/>;
                }): " "
                }
 
            </S.Table>
    )
}