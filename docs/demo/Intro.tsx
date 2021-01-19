import React from 'react';

import { Row, Col } from 'antd';

import proImg from '../assets/adminPro.png';
import blockImg from '../assets/block.png';

import './intro.css';

const INTRO_ZH = [
  {
    name: '标准项目模板',
    img: proImg,
    desc: '提供开箱即用的标准项目模版，帮助快速启动产品',
    url: 'https://github.com/LagrangeLabs/ii-admin-pro',
    target: '_blank',
  },
  {
    name: '常用blocks',
    img: blockImg,
    desc: '提供常用区块帮助快速实现原型',
    url: 'https://code.ii-ai.tech/ued/ii-block-template',
    target: '_blank',
  },
  {
    name: '开发辅助工具 ii-cli',
    img:
      'https://gw.alipayobjects.com/zos/bmw-prod/d1ee0c6f-5aed-4a45-a507-339a4bfe076c/k7bjsocq_w144_h144.png',
    desc: '提供项目代码生成等能力，帮助快速开发模块',
    url: 'https://github.com/LagrangeLabs/ii-cli',
    target: '_blank',
  },
];
const INTRO_EN = [
  {
    name: 'Project Template',
    img: proImg,
    desc:
      'Provide out-of-the-box standard project templates to help quickly start the product',
    url: 'https://github.com/LagrangeLabs/ii-admin-pro',
    target: '_blank',
  },
  {
    name: 'Common Blocks',
    img: blockImg,
    desc: 'Provide common solutions to help rapid prototype',
    url: 'https://code.ii-ai.tech/ued/ii-block-template',
    target: '_blank',
  },
  {
    name: 'Dev Tools ii-cli',
    img:
      'https://gw.alipayobjects.com/zos/bmw-prod/d1ee0c6f-5aed-4a45-a507-339a4bfe076c/k7bjsocq_w144_h144.png',
    desc:
      'Provide project code generation and other capabilities to help rapid development',
    url: 'https://github.com/LagrangeLabs/ii-cli',
    target: '_blank',
  },
];

export default () => {
  const INTRO = location.pathname.indexOf('zh-CN') !== -1 ? INTRO_ZH : INTRO_EN;
  return (
    <div
      style={{
        width: '1200px',
        margin: '40px auto',
        color: '#f6f7f8',
        display: 'flex',
        flexWrap: 'wrap',
      }}
    >
      <Row gutter={24}>
        {INTRO.map(item => {
          return (
            <Col span={8}>
              <a className="intro-item" href={item.url} target={item.target}>
                <img
                  src={item.img}
                  alt=""
                  style={{
                    maxWidth: '100%',
                    height: '175px',
                  }}
                />
                <div className="title">{item.name}</div>
                <div className="desc">{item.desc}</div>
              </a>
            </Col>
          );
        })}
      </Row>
    </div>
  );
};
