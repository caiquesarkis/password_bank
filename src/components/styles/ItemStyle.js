import styled from "styled-components";



export const ItemContainer = styled.div`
    border-bottom: 1px solid #747474;
    padding:21px 0 21px 0;
    display:flex;
    justify-content: space-between;
    align-items:center;
    
    p{
        
        max-width:40px;

        color: white;
        font-size: 24px;
    }
    
`

export const DeleteButton = styled.div`
   width: 30px;
   height: 30px;

   background-color:#FF7979;
   border-radius:10px;

   display:flex;
   align-items:center;
   justify-content:center;
   img{ 
       transform:scale(0.5);
   }

   &:hover{
        transition: all 0.2s ease;
        background-color:#FF5A5A;
        transform: scale(0.9);

   }
   

`