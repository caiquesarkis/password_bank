import styled from 'styled-components'


export const MainContainer = styled.div`
    width:86%;
    padding: 40px 0 40px 0;
    display:flex;
    flex-direction: row;
    justify-content: space-around;
` 


export const AddButton = styled.img`
   width:20px;
   height:20px;

   &:hover{
        transition: all 0.3s ease;
        cursor: pointer;
        transform: scale(0.8);
   }
`

export const SubmitButton = styled.button`
   width: 200px;

   padding:10px;
   background-color:#2877ED;

   border-radius:5px;
   border:none;
   

   &:hover{
        cursor:pointer;
        transition: all 0.3s ease;
        background-color:#1069ED;
   }
`

export const Input = styled.input`
   width: 15vw;

   padding:1vw;

   border-radius:5px;
   border:none;
`