import styled from 'styled-components';

export const HomeWrapper=styled.div`
   width:960px;
   margin: 0 auto;
   overflow:hidden;
`;
export const HomeLeft=styled.div`
   width:650px;
   margin-left:15px;
   padding-top:30px;
   float:left;
   .bannerimg{
       width:625px;
       height:240px;
   }
`;
export const HomeRight=styled.div`
    width:280px;
    float:right;
`;
export const TopicWrapper=styled.div`
    padding:20px 0 10px 0;
    overflow:hidden;
    width:650px;
    margin-left:-18px;
`;
export const TopicItem=styled.div`
    background:#f7f7f7;
    float:left;
    height:32px;
    line-height:32px;
    font-size:14px;
    padding-right:10px;
    color:#000;
    border:1px solid #dcdcdc;
    margin-left:18px;
    margin-bottom:20px;
    .item-img{
        display:block;
        float:left;
        width:32px;
        height:32px;
        margin-right:10px;
    }
`;
export const RecommenedWrapper=styled.div`
    width:100%;
    padding-top:23px;
`;
export const RecommenedItem=styled.div`
    width: 100%;
    margin-bottom: 6px;
    border-radius: 4px;
    .item-pic{
        width: 100%;
        min-height: 50px;
        margin-bottom: 6px;
        border-radius: 4px;
    }
`;
export const MobileWrapper=styled.div`
    margin-bottom: 30px;
    padding: 10px 18px;
    width: 86%;
    border: 1px solid #f0f0f0;
    border-radius: 6px;
    background-color: #fff;
    cursor:pointer;
    .qrcode-img{
        width: 60px;
        height: 60px;
        opacity: .85;
    }
`;
export const Descriptions=styled.div`
    display: inline-block;
    vertical-align: middle;
    margin-top:-50px;
    padding-left:15px;
    .title{
        font-size: 15px;
        color: #333;
    }
    .description{
        margin-top: 4px;
        font-size: 13px;
        color: #999;
        
    }
`;
export const ListWrapper=styled.div`
    padding:10px 0;
    width:100%;
    border-bottom:1px solid #f0f0f0;
    .list-img{
        width:125px;
        height:100px;
        border-radius: 4px;
        border: 1px solid #f0f0f0;
        margin-top:20px;
        margin-left:20px;
    }
`;
export const ListContent=styled.div`
    width:70%;
    float:left;
    p{
        margin: 0 0 8px;
        font-size: 13px;
        line-height: 24px;
        color: #999;
    }
    
`;
export const WriterWrapper=styled.div`
    width:100%;
    padding:10px 0;
    p{
        font-size:14px;
    }
    .words{
        margin: 0 0 8px;
        font-size: 13px;
        line-height: 24px;
        color: #999;
        padding:5px 5px 10px 10px;
    }
    
`;
export const WriterTogle=styled.div`
     padding-bottom:20px;
     width:100%;
     span{
         float:left;
         font-size: 14px;
         color: #969696;
     }
     .page-change{
         float:right;
         font-size: 14px;
         color: #969696;
     }
`;
export const WriterItem=styled.div`
    li{
        list-style:none;
        margin-left:-40px;
        margin-bottom:-65px;
    }
    width:100%;
    .writer-pic{
        float:left;
        width: 45px;
        height: 45px;
        border: 1px solid #ddd;
        border-radius:50%;
    }
    .words{
        display:inline-block;
        line-height:7px;
        margin-top:-17px;
        .name{
            font-size: 14px;
            color:black;
        }
        p{
            font-size: 12px;
            color: #969696
        }
    }
    .follow{
        float: right;
        font-size: 13px;
        color: #42c02e;
        margin-right:-38%;
    }
`;
export const LoadMore=styled.div`
    width:90%;
    border-radius: 20px;
    background-color: #a5a5a5;
    padding: 10px 15px;
    font-size: 15px;
    text-align:center;
    color: #fff;
    cursor:pointer;
    margin-top:30px;
`;
export const BackTop=styled.div`
    position:fixed;
    right:100px;
    bottom:100px;
    font-size:14px;
    width:60px;
    height:60px;
    line-height:60px;
    text-align:center;
    border:1px solid #ccc;
    :hover{
        
    }
`;
export const ViewAll=styled.button`
    position: absolute;
    padding: 7px 7px 7px 12px;
    width: 280px;
    float:right;
    font-size: 13px;
    color: #787878;
    background-color: #f7f7f7;
    border: 1px solid #dcdcdc;
    border-radius: 4px;
    margin-top:10px;
    outline:none;
`;
