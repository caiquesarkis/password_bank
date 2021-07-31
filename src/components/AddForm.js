import * as S from './styles/AddFormStyle'
import { useState } from 'react'

export default function AddForm(props){
    const [isAdding, setIsAdding] = useState(false);
    const [name , setName] = useState(null);
    const [password , setPassword] = useState(null);

    function addItem(){
        setIsAdding(true);
    }

    function handleNameState(e){
        setName(e.target.value)
    }

    function handlePasswordState(e){
        setPassword(e.target.value)
    }

    function savePassword(){
        props.addItem(name,password)
        setIsAdding(false);
    }
    return(
        <S.MainContainer>
            {isAdding === false ? 
            <S.AddButton src='/Assets/Images/addButton.svg' alt='Add button' onClick={addItem}/>
            :
             <>
            <S.Input type='input' name='name' value={name} onChange={handleNameState} placeholder='name'/>
            <S.Input type='input' name='password' value={password} onChange={handlePasswordState} placeholder='password'/>
            <S.SubmitButton onClick={savePassword}>Add Password</S.SubmitButton>
            
            </>
            
            
        }
            
        </S.MainContainer>
        
    )
}