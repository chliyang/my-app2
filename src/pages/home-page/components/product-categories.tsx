import React from "react";
import { Checkbox, Col, Row } from 'antd';
import type { CheckboxValueType } from 'antd/es/checkbox/Group';

const onChange = (checkedValues: CheckboxValueType[]) => {
  console.log('checked = ', checkedValues);
};

const ProductCLasses: React.FC = () => {
  // TODO: 加入数据后记得给组件加测试
  return (
    <Checkbox.Group className="w-full pl-16 text-4xl" onChange={onChange}>
      <Row>
        <Col span={6}>
          <Checkbox value="food">food</Checkbox>
        </Col>
        <Col span={6}>
          <Checkbox value="clothes">clothes</Checkbox>
        </Col>
        <Col span={6}>
          <Checkbox value="furniture">furniture</Checkbox>
        </Col>
        <Col span={6}>
          <Checkbox value="electric">electric</Checkbox>
        </Col>
        <Col span={6}>
          <Checkbox value="toiletries">toiletries</Checkbox>
        </Col>
        <Col span={6}>
          <Checkbox value="cleaning">cleaning</Checkbox>
        </Col>
      </Row>
    </Checkbox.Group>
  );
};

export default ProductCLasses;
