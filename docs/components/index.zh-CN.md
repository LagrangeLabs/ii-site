---
title: 组件
order: 3
toc: menu
nav:
  title: 组件
  order: 1
---

## 说明

目前组件分为三块**UI 规范组件**，**UI 基础组件**及**UI 业务组件**；已经服务于我们余杭信访项目、企链保后台管理、丽水招商(企业入驻，入驻审核)项目，政策计算器等项目，大大**提高开发效率**，**节省开发成本**，新人能够**快速进入项目**开发

## UI 规范组件

UI 规范组件：[ii-admin-ui](https://github.com/LagrangeLabs/ii-admin-ui)，基于我司(实在智能) UI 规范开发的组件库，包含字体颜色、按钮、反馈提示等

### IModal 组件

```
import { IModal } from 'ii-admin-ui';
```

![image](@/docs/assets/Imodal.png)

### ITabs 组件

```
import { ITabs } from 'ii-admin-ui';
```

![image](@/docs/assets/Itab.png)

### ITable 组件

```
import { ITable } from 'ii-admin-ui';
```

![image](@/docs/assets/Itable.png)

## UI 基础组件

UI 基础组件：[ii-admin-base](https://github.com/LagrangeLabs/ii-admin-base), 基于 ii-admin-ui 组件进行基础封装，比如验证码组件、高亮卡片组件等

### HighlightCard 高亮组件

```
import React from 'react';
import { HighlightCard } from 'ii-admin-base';

export default () => <HighlightCard cardTitle="高亮标题" />;
```

![image](@/docs/assets/IHighlight.png)

### InputVerify 验证码

```
import React from 'react';
import { InputVerify } from 'ii-admin-base';

export default () => (
  <InputVerify
    placeholder="请输入四位验证码"
    sendCode={() => {}}
    onChange={() => {}}
  />
);
```

![image](@/docs/assets/InputVerify.png)

### SelectSearch 搜索下拉框

```
import React from 'react';
import { SelectSearch } from 'ii-admin-base';
export default () => (
  <SelectSearch
    placeholder="请输入搜索关键字"
    itemStyle={{ width: '400px' }}
    getOption={data => {
      return data.map((item: any) => ({ key: item, value: item }));
    }}
    fetchOption={() => {
      return new Promise(resolve => {
        const len = parseInt(Math.random(0, 1) * 10) + 1;
        const result = [];
        for (let i = 0; i < len; i++) {
          result.push(`searchData${i + 1}`);
        }
        resolve(result);
      });
    }}
    getParams={value => value}
  />
);
```

![image](@/docs/assets/SelectSearch.png)

### IUpload 常用封装

```
import React from 'react';
import { IUpload } from 'ii-admin-base';
export default () => {
  return (
    <IUpload
      extra={[
        '支持扩展名：.word .pdf',
        <span style={{ color: 'red' }}>建议上传30M以内大小的PDF文件</span>,
      ]}
      describe="点击或将PDF拖拽到这里上传"
    />
  );
};
```

![image](@/docs/assets/IUpload.png)

### SearchTree 树结构组件

```
import React from 'react';
import { SearchTree } from 'ii-admin-base';
import { CarryOutOutlined, PlayCircleFilled } from '@ant-design/icons';

const treeData = [
  {
    hhh: '0-0',
    lll: '0-0',
    selectable: false,
    disabled: true,
    kkk: [
      {
        hhh: '0-0-0',
        lll: '0-0-0',
        kkk: [
          { hhh: '0-0-0-0', lll: '0-0-0-0' },
          { hhh: '0-0-0-1', lll: '0-0-0-1' },
          { hhh: '0-0-0-2', lll: '0-0-0-2' },
        ],
      },
      {
        hhh: 'Suyana',
        lll: '0-0-1',
        kkk: [
          { hhh: '0-0-1-0', lll: '0-0-1-0' },
          { hhh: '0-0-1-1', lll: '0-0-1-1' },
          { hhh: '0-0-1-2', lll: '0-0-1-2' },
        ],
      },
      {
        hhh: '0-0-2',
        lll: '0-0-2',
        selectable: false,
        disabled: true,
      },
    ],
  },
  {
    hhh: '0-1',
    lll: '0-1',
    kkk: [
      { hhh: '0-1-0-0', lll: '0-1-0-0' },
      { hhh: '0-1-0-1', lll: '0-1-0-1' },
      { hhh: '0-1-0-2', lll: '0-1-0-2' },
    ],
  },
  {
    hhh: '0-2',
    lll: '0-2',
  },
];

export default () => (
  <SearchTree
    treeData={treeData}
    titleField="hhh"
    keyField="lll"
    childrenField="kkk"
    iconTag={[<CarryOutOutlined />, <PlayCircleFilled />]}
    showIcon
    showSearch={true}
  />
);
```

![image](@/docs/assets/SearchTree.png)

## UI 业务组件

UI 业务组件：[ii-admin-business](https://github.com/LagrangeLabs/ii-admin-business),对业务中的通用逻辑进行封装，方便在其他项目中快速复用，典型的有搜索列表页（PageTable）

### Voice 音频组件

```
import React from 'react';
import { Voice } from 'ii-admin-business';

export default () => (
  <Voice voiceSrc="http://img02.tuke88.com/newpreview_music/00/10/93/5d819c5a0582950889.mp3" />
);
```

![image](@/docs/assets/Voice.png)

### RichText 富文本组件

```
import React from 'react';
import { RichText } from 'ii-admin-business';

export default () => <RichText />;
```

![image](@/docs/assets/RichText.png)

### form 表单 常用封装

```
import React from 'react';
import { IForm } from 'ii-admin-business';
import { Form, Button, Row, Col } from 'antd';
const treeData = [
  {
    title: '大部门1',
    id: '0-1',
    child: [
      { title: '小部门1', id: '0-1-0-0' },
      { title: '小部门2', id: '0-1-0-1' },
      { title: '小部门3', id: '0-1-0-2' },
    ],
  },
  {
    title: '大部门2',
    id: '0-2',
  },
];
const DEMO_FORM = [
  {
    type: 'select',
    placeholder: '请选择企业规模',
    label: '企业规模',
    option: [
      { key: '1-50人', value: '1-50人' },
      { key: '50-100人', value: '50-100人' },
      { key: '101-150人', value: '101-150人' },
    ],
    name: 'select',
  },
  {
    type: 'multiselect',
    placeholder: '请选择企业规模复选',
    label: '企业规模复选',
    option: [
      { key: '1-50人', value: '1-50人' },
      { key: '50-100人', value: '50-100人' },
      { key: '101-150人', value: '101-150人' },
    ],
    name: 'multiselect',
  },
  {
    type: 'selectSearch',
    placeholder: '输入关键字',
    label: '远程搜索复选框',
    option: [],
    name: 'selectSearch',
    getOption: data => {
      return data.map((item: any) => ({ key: item, value: item }));
    },
    fetchOption: () => {
      return new Promise(resolve => {
        resolve(['searchData1', 'searchData2']);
      });
    },
    getParams: value => value,
  },
  {
    type: 'select',
    label: '关联父级',
    name: 'parentCode',
    childName: 'childCode',
    option: [
      { key: '选项一', value: '1' },
      { key: '选项二', value: '2' },
    ],
  },
  {
    type: 'select',
    label: '关联子级',
    name: 'childCode',
    parentName: 'parentCode',
    originOption: {
      '1': [
        { key: '子选项一', value: '子1' },
        { key: '子选项二', value: '子2' },
      ],
      '2': [
        { key: '子选项三', value: '子3' },
        { key: '子选项四', value: '子4' },
      ],
    },
    option: [],
  },
  {
    type: 'phone',
    placeholder: '获取验证码',
    label: '验证码',
    name: 'code',
  },
  {
    type: 'input',
    placeholder: '隐藏该字段，默认传参值',
    hidden: true,
    value: '默认传参',
    label: '企业资质',
    name: 'input',
  },
  {
    type: 'date',
    placeholder: '输入日期',
    label: '日期',
    name: 'date',
  },
  {
    type: 'number',
    placeholder: '输入数字',
    label: '数字',
    name: 'number',
  },
  {
    type: 'selectTree',
    label: '下拉组织树',
    name: 'selectTree',
    treeData,
    titleField: 'title',
    keyField: 'id',
    childrenField: 'child',
  },
  {
    type: 'upload',
    label: '上传附件',
    name: 'upload',
    extra: ['支持扩展名：.word .pdf', '建议上传30M以内大小的PDF文件'],
    describe: '点击或将PDF拖拽到这里上传',
    itemStyle: { width: '300px', height: '150px', background: '#fbfdff' },
    rules: [],
  },
  {
    type: 'cronInput',
    label: 'cron表达式',
    name: 'cronInput',
    itemStyle: { width: '600px' },
    rules: [],
  },
];
export default () => {
  const [form] = Form.useForm();
  const getFormValues = () => {
    form
      .validateFields()
      .then((values: any) => {
        console.log(values, 'sdfsdf');
      })
      .catch(_info => {
        // console.log(info, 'sdfsfsdf');
      });
  };
  return (
    <div>
      <IForm
        formItemLayout={{ labelCol: { span: 6 }, wrapperCol: { span: 14 } }}
        form={form}
        list={DEMO_FORM}
      />
      <Row>
        <Col offset={6}>
          <Button type="primary" onClick={getFormValues}>
            提交
          </Button>
          <Button style={{ marginLeft: '8px' }}>取消</Button>
        </Col>
      </Row>
    </div>
  );
};
```

![image](@/docs/assets/Iform.png)

### ScrollPdf 无限滚动

```
import React, { useState, useEffect } from 'react';
import { Upload, Button, Pagination } from 'antd';
import { ScrollPdf } from 'ii-admin-business';
export default () => {
  const [files, setFiles] = useState(null);
  const [markInfoOrigin, setMarkInfo] = useState();
  const [pages, setPages] = useState(0);
  const [current, setCurrent] = useState(1);
  const [size, setSize] = useState(false);
  const [base64File, setBase64File] = useState(null);
  const props = {
    beforeUpload: file => {
      setFiles(file);
      return false;
    },
    files,
  };
  useEffect(() => {
    if (files) {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(files);
      fileReader.onload = () => {
        const base64Str = fileReader.result;
        setBase64File(base64Str);
      };
    }
  }, [files]);
  const getPages = (pages: number, current: number) => {
    setPages(pages);
    if (current) {
      setCurrent(current);
    }
  };
  const onChange = (page: number) => {
    setCurrent(page);
    setMarkInfo({
      page: page,
      width: 1000,
      height: 1000,
    });
  };
  const getScaleInfo = params => {
    params.ref.scrollTop = 1800 * 1;
  };
  const changeSize = params => {
    setSize(true);
    setTimeout(() => {
      setSize(false);
    }, 1000);
  };
  return (
    <div>
      <Upload {...props}>
        <Button>选择pdf文件</Button>
      </Upload>
      <Button type="primary" style={{ marginTop: 10 }} onClick={changeSize}>
        更改页面大小
      </Button>
      <Pagination
        style={{ margin: '20px 0' }}
        current={current}
        defaultPageSize={1}
        hideOnSinglePage
        total={pages}
        onChange={onChange}
      />
      <div style={{ height: '50vh' }}>
        <ScrollPdf
          resize={size}
          markInfoOrigin={markInfoOrigin}
          onChangePages={getPages}
          pdfFile={base64File}
          getScaleInfo={getScaleInfo}
        />
      </div>
    </div>
  );
};
```

![image](@/docs/assets/IScrollPdf.png)

### PageTable 页面列表组件

```
import React, { useState } from 'react';
import { Switch } from 'antd';
import { PageTable } from 'ii-admin-business';
import { PlusOutlined, FileOutlined } from '@ant-design/icons';
import { SearchTree } from 'ii-admin-base';
export default () => {
  const [checkObj, setCheckObj] = useState({
    showSearchTree: true,
    showSearch: true,
    showCreate: true,
    leftCreate: true,
    needPatchDelete: true,
    needSelect: true,
  });
  const treeData = [
    {
      hhh: '0-0',
      lll: '0-0',
      kkk: [
        {
          hhh: 'name',
          lll: 'value',
          kkk: [
            { hhh: 'name-0', lll: 'value-0' },
            { hhh: 'name-1', lll: 'value-1' },
            { hhh: 'name-2', lll: 'value-2' },
          ],
        },
        {
          hhh: 'Suyana',
          lll: '0-0-1',
          kkk: [
            { hhh: '0-0-1-0', lll: '0-0-1-0' },
            { hhh: '0-0-1-1', lll: '0-0-1-1' },
            { hhh: '0-0-1-2', lll: '0-0-1-2' },
          ],
        },
        {
          hhh: '0-0-2',
          lll: '0-0-2',
        },
      ],
    },
    {
      hhh: '0-1',
      lll: '0-1',
      kkk: [
        { hhh: '0-1-0-0', lll: '0-1-0-0' },
        { hhh: '0-1-0-1', lll: '0-1-0-1' },
        { hhh: '0-1-0-2', lll: '0-1-0-2' },
      ],
    },
    {
      hhh: '0-2',
      lll: '0-2',
    },
  ];
  const filters = [
    {
      type: 'search',
      placeholder: '请输入项目名称',
      filter: 'name',
      width: '30%',
      className: 'testinput',
    },
    {
      type: 'rangepicker',
      placeholder: '',
      filter: ['startDate', 'endDate'],
      width: '40%',
    },
  ];
  const tableList = [
    { key: '名称', id: '1', value: 'ming' },
    { key: '名称2', id: '2', value: 'ming' },
    { key: '名称3', id: '3', value: 'ming' },
  ];
  const columns = [
    { dataIndex: 'serialNumber', title: '序号' },
    { dataIndex: 'key', title: '第一列', sorter: true },
    { dataIndex: 'value', title: '第二列', sorter: true },
  ];
  const deleteCallback = value => {
    console.log(value, 'sdfsdfsdf');
  };
  const createCallback = value => {
    console.log('value=======', value);
  };
  const onChange = (type, value) => {
    console.log(type, value, 'sdfsfsdf');
    setCheckObj({
      ...checkObj,
      [type]: value,
    });
  };
  return (
    <div>
      <div>
        是否展示组织树：
        <Switch
          checked={checkObj.showSearchTree || false}
          onChange={onChange.bind(null, 'showSearchTree')}
        />
        <br />
        是否展示组织树搜索框：
        <Switch
          checked={checkObj.showSearch || false}
          onChange={onChange.bind(null, 'showSearch')}
        />
        <br />
        是否新增按钮：
        <Switch
          checked={checkObj.showCreate || false}
          onChange={onChange.bind(null, 'showCreate')}
        />
        <br />
        新增按钮位置左边（默认右边）：
        <Switch
          checked={checkObj.leftCreate || false}
          onChange={onChange.bind(null, 'leftCreate')}
        />
        <br />
        是否批量删除：
        <Switch
          checked={checkObj.needPatchDelete || false}
          onChange={onChange.bind(null, 'needPatchDelete')}
        />
        <br />
        是否有列表复选框：
        <Switch
          checked={checkObj.needSelect || false}
          onChange={onChange.bind(null, 'needSelect')}
        />
        <br />
      </div>
      <PageTable
        total={100}
        pageTitle="页面标题"
        tableList={tableList}
        getTableList={() => {}}
        columns={columns}
        filters={filters}
        createTitle="新增"
        createCallback={() => {}}
        treeData={treeData}
        titleField="hhh"
        keyField="lll"
        childrenField="kkk"
        searchTreeKey="template_category"
        createIcon={<PlusOutlined />}
        showSearchTree={checkObj.showSearchTree}
        showSearch={checkObj.showSearch}
        showCreate={checkObj.showCreate}
        leftCreate={checkObj.leftCreate}
        needPatchDelete={checkObj.needPatchDelete}
        needSelect={checkObj.needSelect}
        iconTag={<PlusOutlined />}
        deleteCallback={deleteCallback}
        createCallback={createCallback}
      />
    </div>
  );
};

```

![image](@/docs/assets/IPageTable.png)

### IPageHeader 标题栏

```
import React, { Fragment } from 'react';
import { IPageHeader } from 'ii-admin-business';
export default () => {
  return (
    <Fragment>
      <IPageHeader title="我是标题1" />
      <IPageHeader title={<span>我是标题2</span>} />
    </Fragment>
  );
};
```

![image](@/docs/assets/IPageHeader1.png)

```
import React, { Fragment } from 'react';
import { IPageHeader } from 'ii-admin-business';
import { Button, Form, Input } from 'antd';
export default () => {
  return (
    <Fragment>
      <IPageHeader
        title="我是标题1"
        extra={<Button type="primary">点我新增</Button>}
      />
    </Fragment>
  );
};
```

![image](@/docs/assets/IPageHeader2.png)

```
import React, { Fragment } from 'react';
import { IPageHeader } from 'ii-admin-business';
import { Button, Form, Input } from 'antd';
export default () => {
  return (
    <Fragment>
      <IPageHeader
        title="我是标题2"
        extra={<Button type="primary">点我新增</Button>}
      >
        <Form layout="inline">
          <Form.Item>
            <Input placeholder="请输入姓名搜索" />
          </Form.Item>
          <Form.Item>
            <Input placeholder="请输入编号搜索" />
          </Form.Item>
          <Form.Item>
            <Button type="primary">搜索</Button>
          </Form.Item>
        </Form>
      </IPageHeader>
    </Fragment>
  );
};
```

![image](@/docs/assets/IPageHeader3.png)

### RadioDatePicker 组件

```
import React, { useState } from 'react';
import { RadioDatePicker } from 'ii-admin-business';
export default () => {
  const radioOptions = [
    { key: '2天内', value: '1' },
    { key: '10天内', value: '9' },
  ];
  const [timeInfo, setTimeInfo] = useState({});
  const [time2Info, setTime2Info] = useState({});
  const changeRangeDate = (timeInfo: {
    startTime: string;
    endTime: string;
  }) => {
    const { startTime, endTime } = timeInfo;
    setTimeInfo({ startTime, endTime });
  };
  const changeRange2Date = (timeInfo: {
    startTime: string;
    endTime: string;
  }) => {
    const { startTime, endTime } = timeInfo;
    setTime2Info({ startTime, endTime });
  };
  return (
    <div>
      <div>
        结果： {timeInfo.startTime} -- {timeInfo.endTime}
      </div>
      <br />
      <RadioDatePicker
        radioValue="6"
        changeRangeDate={changeRangeDate}
        radioRight
        pickerStyle={{ marginRight: '100px', width: '300px' }}
        radioStyle={{ marginLeft: '50px', padding: '0 5px' }}
      />
      <br /> <br />
      <div>
        结果2： {time2Info.startTime} -- {time2Info.endTime}
      </div>
      <br />
      <RadioDatePicker
        radioOptions={radioOptions}
        changeRangeDate={changeRange2Date}
      />
    </div>
  );
};
```

![image](@/docs/assets/RadioDatePicker.png)

### FilterOptions 搜索条件组件

```
import React, { useState } from 'react';
import { FilterOptions } from 'ii-admin-business';
export default () => {
  const filters = [
    {
      type: 'search',
      placeholder: '请输入项目名称',
      filter: 'name',
      width: '30%',
      className: 'testinput',
    },
    {
      type: 'rangepicker',
      placeholder: '',
      filter: ['startDate', 'endDate'],
      width: '40%',
    },
  ];
  const [filterValue, setFilterValue] = useState({});
  return <FilterOptions filters={filters} setFilterOpts={setFilterValue} />;
};
```

![image](@/docs/assets/FilterOptions.png)
