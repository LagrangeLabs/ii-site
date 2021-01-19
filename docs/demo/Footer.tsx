import React from 'react';

import { Row, Col } from 'antd';

const CODE_LIB = [
  {
    name: 'ii-cli',
    url: 'https://github.com/LagrangeLabs/ii-cli',
    target: '_blank',
  },
  {
    name: 'ii-mini-pro',
    url: 'https://github.com/LagrangeLabs/ii-mini-pro',
    target: '_blank',
  },
  {
    name: 'ii-admin-pro',
    url: 'https://github.com/LagrangeLabs/ii-admin-pro',
    target: '_blank',
  },
  {
    name: 'ii-block-template',
    url: 'https://code.ii-ai.tech/ued/ii-block-template',
    target: '_blank',
  },
];
const SOLUTIONS = [
  {
    name: 'ii-admin-ui',
    url: 'https://github.com/LagrangeLabs/ii-admin-ui',
    target: '_blank',
  },
  {
    name: 'ii-admin-base',
    url: 'https://github.com/LagrangeLabs/ii-admin-base',
    target: '_blank',
  },
  {
    name: 'ii-admin-charts',
    url: 'https://github.com/LagrangeLabs/ii-admin-charts',
    target: '_blank',
  },
  {
    name: 'ii-admin-business',
    url: 'https://github.com/LagrangeLabs/ii-admin-business',
    target: '_blank',
  },
];

const GROUP = [
  {
    name: '实在智能前端团队@II Team',
    url: 'https://www.yuque.com/ii-team',
    target: '_blank',
  },
];
const RESOURCE = [
  {
    name: 'react',
    url: 'https://react.docschina.org/',
    target: '_blank',
  },
  {
    name: 'antd',
    url: 'https://ant.design/index-cn',
    target: '_blank',
  },
  {
    name: 'bizcharts',
    url: 'https://bizcharts.net/',
    target: '_blank',
  },
];
const FOOTER_ZH = {
  代码仓库: CODE_LIB,
  解决方案: SOLUTIONS,
  团队文化: GROUP,
  相关资源: RESOURCE,
};
const FOOTER_EN = {
  Repository: CODE_LIB,
  Solutions: SOLUTIONS,
  Group: GROUP,
  Resource: RESOURCE,
};

export default () => {
  const FOOTER = location.hash.indexOf('zh-CN') !== -1 ? FOOTER_ZH : FOOTER_EN;
  const keysArray = Object.keys(FOOTER) as (keyof typeof FOOTER)[];
  return (
    <div>
      {/* <div style={{ height: 336, position: 'relative' }}></div> */}
      <div
        style={{
          boxSizing: 'border-box',
          paddingTop: '86px',
          position: 'absolute',
          left: 0,
          right: 0,
          background: '#1a1d2b',
          height: 366,
        }}
      >
        <div
          style={{
            width: '1135px',
            margin: '0 auto',
            color: '#f6f7f8',
          }}
        >
          <Row>
            {keysArray.map((item, index) => {
              const array: typeof SOLUTIONS = FOOTER[item];
              return (
                <Col span={6} style={{ textAlign: 'center' }} key={index}>
                  <div style={{ fontSize: 16, marginBottom: 20 }}>{item}</div>
                  {array.map((each, index2) => (
                    <a
                      style={{
                        padding: '5px 0',
                        display: 'block',
                        color: '#f6f7f8',
                        fontSize: 14,
                      }}
                      target={each.target}
                      href={each.url}
                      key={index2}
                    >
                      {each.name}
                    </a>
                  ))}
                </Col>
              );
            })}
          </Row>
        </div>
      </div>
    </div>
  );
};
