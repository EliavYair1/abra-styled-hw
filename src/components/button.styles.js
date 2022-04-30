import styled from "styled-components";

const variantType = (variant)=>{
switch (variant) {
  case "outline":
    return`
    background-color: #fff;
    color: #ff9f00;
    border: solid 2px #ff9f00;
    &:hover{
color:#f08e0e;
border: solid 2px #f08e0e;
background-color:#fff;
    }
    &:focus{
      border: solid 2px #d87a00;
      background-color: #faefdd;
    }
    &:active{
      color:#ffbb33;
      border:solid 2px #ffbb33;
      background-color: #fff;
    }
    `

    case "text":
      return `background-color: #fff;
              color: #ff9f00;
              border: 0px;
              &:hover{
                color: #f08e0e;
                background-color:#fff;
                border:none;
              }
              &:focus{
                color: #d87a00;
                background-color:#fff;
                border:none;
              }
              &:active{
                color:#ffbb33;
                background-color:#fff;
                border:none;
              }
              `   
case "disabled":
  return `
  color:#919191;
  border: 2px solid #919191;
  background-color:#fff;
  pointer-events: none;
  `
  default:
    break;
}

}
const sizeType = (size)=>{
  switch (size) {
    case "small":
      return`
      width: 90px;
      height: 30px;
      padding: 8px 20px;

      `
    case "medium":
      return`
      width: 130px;
      height: 40px;
      padding: 12px 28px;
      `
      
    case "large":
      return`
      width: 160px;
      height: 60px;
      padding: 16px 42px;
      `
    default:
      break;
  }
}

const colorType = (color)=>{
 switch (color) {
   case "primary":
     return`
     color:#fff;
     background-color:#ff9f00;
  
     `
     
   case"secondary":
   return`
   color:#fff;
   background-color: #e7e7e7;
   pointer-events: none;
   `
 case"success":
 return`
 color:#fff;
 background-color: #4CAF50;
 pointer-events: none;
 `;
 case"error":
 return`
 color:#fff;
 background-color: #f44336;
 pointer-events: none;
 `
   default:
     break;
 }
}

export const Button = styled.button`
  width: 205px;
  height: 55px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin: 0 0 40px 100px;
  padding: 16px 10px;
  border-radius: 12px;
  border: 1px solid #ff9f00;
  background-color: #ff9f00;
border-radius: 12px;
border: none;
flex-grow: 0;
  font-family: Arial;
  font-size: 20px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  color: #fff;
  text-transform: uppercase;
  &:hover{
    border: 1px solid #f08e0e;
    background-color: #f08e0e;
  }
  &:focus{
    border: solid 2px #d87a00;
  background-color: #f08e0e;
  }
  &:active{
background-color: #FFBB33;
border: 1px solid #FFBB33;
color:#FFFEFD;
  }
${props => variantType(props.variant)}
${props=>sizeType(props.size)}
${props=>colorType(props.color)}
`;
