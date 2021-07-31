import * as S from  './styles/passwordBankStyle.js'

import Table from '../components/Table'
import AddForm from '../components/AddForm.js'

export default function PasswordBank(props){
     
    return(
        <S.MainContainer>
            <S.Title>Password Bank</S.Title>
            <Table itemsRef={props.itemsRef} removeItem={props.removeItem}/>
            <AddForm addItem={props.addItem}/>
        </S.MainContainer>

    )
}