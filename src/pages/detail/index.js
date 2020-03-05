import React, {Component} from 'react';
import {
    DetailWrapper,
    DetailTitle,
    Content
} from './style';

class Detail extends Component{
    render(){
        return(
            <DetailWrapper>
                <DetailTitle>
                <h3>
                你敢玩程序员的电脑吗？网友：不敢了，没有下次了！ 真香   
                </h3>
                
                </DetailTitle>
                <Content>
                <img alt="" src='https://upload-images.jianshu.io/upload_images/5913679-b1af457df6683995?imageMogr2/auto-orient/strip|imageView2/2/w/1000/format/webp'/>
                <p>程序员是一个天天和电脑打交道的群体，程序员肯定是最了解电脑的群体了，在外人看来，程序员用电脑就是得心应手啊，那么程序员使用电脑和平常人有什么区别吗？很多网友也同样好奇，于是试着去体验一下，结果闹出了许多逗逼事！</p>
                <p>我用的linux，wm用了awesome（就是你只能用快捷键操作所有的东西，比如打开个什么程序）。不知道为什么，学妹让我请她吃饭。我和她说，如果你能删掉我一个文件，我就请你吃饭。</p>
                <p>其实就是因为有洁癖，把桌面快捷方式丢到一个文件夹，然后把文件夹路径添加到path，给每个快捷方式取个自己习惯记得住的名字，打开的时候输入 win+r，再输入快捷方式名，回车，一气呵成，简直酷 (zhuang)炫 (bi) …</p>
                </Content>
            </DetailWrapper>
        )
    }
}




export default Detail;