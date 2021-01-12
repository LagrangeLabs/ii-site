import React from 'react';

import { Row, Col } from 'antd';

const CODE_LIB = [
  {
    name: 'ii-block-template',
    url: 'https://code.ii-ai.tech/ued/ii-block-template',
    target: '_blank',
  },
  {
    name: 'ii-admin-pro',
    url: 'https://github.com/LagrangeLabs/ii-admin-pro',
    target: '_blank',
  },
  {
    name: 'ii-mini-pro',
    url: 'https://github.com/LagrangeLabs/ii-mini-pro',
    target: '_blank',
  },
  {
    name: 'ii-cli',
    url: 'https://github.com/LagrangeLabs/ii-cli',
    target: '_blank',
  },
];
const SOLUTIONS = [
  {
    name: 'ii-admin-charts',
    url: 'https://github.com/LagrangeLabs/ii-admin-charts',
    target: '_blank',
  },
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
    name: 'ii-admin-business',
    url: 'https://github.com/LagrangeLabs/ii-admin-business',
    target: '_blank',
  },
];

const FOOTER_ZH = {
  代码仓库: CODE_LIB,
  解决方案: SOLUTIONS,
};
const FOOTER_EN = {
  Repository: CODE_LIB,
  Solutions: SOLUTIONS,
};

export default () => {
  const FOOTER = location.pathname.indexOf('zh-CN') !== -1 ? FOOTER_ZH : FOOTER_EN
  const keysArray = Object.keys(FOOTER) as (keyof typeof FOOTER)[];
  return (
    <div>
      <div style={{height: 336}}></div>
      <div
        style={{
          boxSizing: 'border-box',
          paddingTop: '86px',
          position: 'fixed',
          background: '#1a1d2b',
          bottom: 0,
          left: 0,
          right: 0,
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
            {keysArray.map(item => {
              const array: typeof SOLUTIONS  = FOOTER[item];
              return (
                <Col span={6}>
                  <div style={{ fontSize: 16, marginBottom: 20 }}>{item}</div>
                  {array.map(each => (
                    <a
                      style={{ padding: '5px 0', display: 'block', color: '#f6f7f8', fontSize: 14 }}
                      target={each.target}
                      href={each.url}
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
