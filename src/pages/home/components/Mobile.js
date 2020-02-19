import React, {PureComponent} from 'react';
import {
    MobileWrapper,
    Descriptions,
} from '../style';

class Mobile extends PureComponent{
    render(){
        return(
            <MobileWrapper>
                <img  alt='' className="qrcode-img" src="https://cdn2.jianshu.io/assets/web/download-index-side-qrcode-cb13fc9106a478795f8d10f9f632fccf.png"/>
                <Descriptions>
                    <p className="title">下载简书手机App</p>
                    <p className="description">随时随地发现和创作内容</p>
                </Descriptions>
            </MobileWrapper>
        )
    }
}

export default Mobile;