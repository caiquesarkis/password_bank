import * as S from './styles/ItemStyle'

export default function Item(props){

    function deleteItem(){
        props.removeItem(props.id)
    }
    
    return(
        <S.ItemContainer>
            <p>{props.name}</p>
            <p>{props.password}</p>

            <S.DeleteButton onClick={deleteItem}>
                <img src='/Assets/Images/deleteIcon.png' alt='deleteIcon'/>
            </S.DeleteButton>
        </S.ItemContainer>
    )
}