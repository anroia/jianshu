import styled from 'styled-components';

export const Recommendation=styled.div`
   width:960px;
   margin:auto;
   .recommened-banner{
    width: 100%;
    min-height: 100px;
    background-color: hsla(0,0%,71%,.2);
    border-radius: 6px;
    margin-top:40px;
   }
`;
export const RecommenedArea=styled.div`
   width:100%;
`;
export const Line=styled.div`
   margin--right:20px;
`;
export const Wrap=styled.div`
    display:inline-block;
    width:25%;
    height: 400px;
    margin-left:20px;
    margin-top: 80px;
    padding: 0 26.61px;
    border: 1px solid #e6e6e6;
    border-radius: 4px;
    background-color: hsla(0,0%,71%,.1);
    transition: .2s ease;
    -webkit-transition: .2s ease;
    .head-pic{
        cursor: pointer;
        img{
            width: 80px;
            height: 80px;
            margin: -40px 0 10px;
            display: inline-block;
            border: 1px solid #ddd;
            background-color: #fff;
            vertical-align: middle;
            box-sizing: border-box;
            border-radius:50%;
            margin-left:80px;
        }
    }
    h3{
        margin:10px 0;
        font-size: 21px;
        text-align:center;
    }
    .description{
        margin: 0 auto 10px;
        min-height: 50px;
        font-size: 13px;
        line-height: 25px;
        width:180px;
        text-align:center;
    }
    .follow{
        width: 100px;
        padding: 8px 0;
        border-color: #42c02e;
        font-size: 16px;
        border-radius: 40px;
        color: #fff;
        background-color: #42c02e
        text-align:center;
        margin-left:29%;
    }
    hr{
        margin-top: 20px;
        margin-bottom: 20px;
        border: 0;
        border-top: 1px solid #eee;
        border-color: #eaeaea;
        box-sizing: content-box;
        height: 0;
    }
    .update{
        float: left;
        margin-top: -29px;
        padding-right: 10px;
        font-size: 12px;
        color: #969696;
        background-color: #f8f8f8
    }
    .article{
        padding:0 22.95px;
        .new{
            font-size: 13px;
            line-height: 25px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            display: block;
            cursor: pointer;
            color: #333;
        }
    }
`;