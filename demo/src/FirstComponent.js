import React from "react";
import { Button } from 'antd';

export default () => {
  return (
    <div className="component first-component">
      <div className = "first-component-text">
        <h5>visual up</h5>
        <h1>코딩 연습 제대로 해보자!<br/>
        하루하루 꾸준한 습관 기르기<br/>
        목표 시각화 사이트, Visual UP</h1>
        <Button type="primary" shape ="circle" >바로가기</Button>
      </div>
    </div>
  );
};
