---
title: Components
order: 3
toc: menu
nav:
  title: components
  order: 1
---

## Explain

currently the component is divided into three pieces**UI BaseComponents**，**UI StandardComponents**及**UI BusinessComponents**；Has served us 余杭信访项目、企链保后台管理、丽水招商(企业入驻，入驻审核)项目，政策计算器, etc；**Improve development efficiency**，**Save development costs**，The couple can **Rapid development project**

## UI StandardComponents

UI StandardComponents：[ii-admin-ui](https://github.com/LagrangeLabs/ii-admin-ui)，develop components based on our company(ii) UI standard ，Contains font colors, buttons, feedback tips, etc

### IModal Component

```
import { IModal } from 'ii-admin-ui';
```

![image](@/docs/assets/Imodal.gif)

### ITabs Component

```
import { ITabs } from 'ii-admin-ui';
```

![image](@/docs/assets/itab.gif)

### ITable Component

```
import { ITable } from 'ii-admin-ui';
```

![image](@/docs/assets/Itable.png)

## UI BaseComponents

UI BaseComponents：[ii-admin-base](https://github.com/LagrangeLabs/ii-admin-base), Base encapsulation based on ii-admin-ui component，For example: InputVerify Component, HighlightCard Component ect

### HighlightCard Component

```
import React from 'react';
import { HighlightCard } from 'ii-admin-base';

export default () => <HighlightCard cardTitle="高亮标题" />;
```

![image](@/docs/assets/IHighlight.png)

### InputVerify Component

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

![image](@/docs/assets/InputVerify.gif)

### SelectSearch Component

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

### IUpload Component

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

![image](@/docs/assets/IUpload.gif)

### SearchTree Component

```
import React from 'react';
import { SearchTree } from 'ii-admin-base';
import { CarryOutOutlined, PlayCircleFilled } from '@ant-design/icons';

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

![image](@/docs/assets/SearchTree.gif)

### ISelectTree Components

```
import React from 'react';
import { ISelectTree } from 'ii-admin-base';
export default () => (
  <ISelectTree
    treeData={treeData}
    titleField="字段名"
    keyField=字段名"
    childrenField="字段名"
    style={{ width: 300 }}
  />
);
```

![image](@/docs/assets/IselectTree.gif)

## UI BusinessComponents

UI BusinessComponents[ii-admin-business](https://github.com/LagrangeLabs/ii-admin-business),Encapsulate common logic in the business for quick reuse in other projects，For example PageTable

### Voice Component

```
import React from 'react';
import { Voice } from 'ii-admin-business';

export default () => (
  <Voice voiceSrc="http://img02.tuke88.com/newpreview_music/00/10/93/5d819c5a0582950889.mp3" />
);
```

![image](@/docs/assets/Voice.png)

### RichText Component

```
import React from 'react';
import { RichText } from 'ii-admin-business';

export default () => <RichText />;
```

![image](@/docs/assets/RichText.gif)

### form Component

```
import React from 'react';
import { IForm } from 'ii-admin-business';
import { Form, Button, Row, Col } from 'antd';

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

![image](@/docs/assets/Iform.gif)

### ScrollPdf Component

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

![image](@/docs/assets/IScrollPdf.gif)

### PageTable Component

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

![image](@/docs/assets/IPageTable.gif)

### IPageHeader Component

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

### RadioDatePicker Component

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

![image](@/docs/assets/RadioDatePicker.gif)

### FilterOptions Component

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
