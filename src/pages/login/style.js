import styled from 'styled-components';

export const LoginWrapper=styled.div`
   z-index:0;
   position:absolute;
   left:0;
   right:0;
   bottom:0;
   top:56px;
`;
export const LoginBox=styled.div`
   width:400px;
   height:220px;
   margin:80px auto;
   padding-top:20px;
   background-color:#E8F4F1;
   box-shadow:0 0 8px rgba(0,0,0,.1);
`;
export const Input=styled.input`
   diaplsy:block;
   width:200px;
   height:30px;
   padding:0 10px;
   margin-top:15px;
   margin-left:22%;
   color:#777;
   outline:none;
   border-radius:4px;
   border-style: none ;
   border:1px solid #576464;
`;
export const Button=styled.div`
   width:220px;
   height:30px;
   line-height:30px;
   color:#fff;
   background:#3194d0;
   border-radius:15px;
   margin:10px auto;
   text-align:center;
   margin-top:30px;
`;