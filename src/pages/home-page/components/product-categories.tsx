import React, { useState } from "react";
import { Checkbox, Col, Row } from 'antd';
import type { CheckboxValueType } from 'antd/es/checkbox/Group';
import { fetchProductTypes } from "../../../actions/product-actions/product";

const onChange = (checkedValues: CheckboxValueType[]) => {
  console.log('checked = ', checkedValues);
};

const ProductCLasses: React.FC = () => {
  // TODO: 加入数据后记得给组件加测试
  const [productTypes, setProductTypes] = useState([]);
  fetchProductTypes.then((res) => setProductTypes(res.data));
  return (
    <Checkbox.Group className="w-full pl-16 text-4xl" onChange={onChange}>
      <Row>
        {productTypes.map((type) => (<Col key={type} span={6}>
          <Checkbox value={type}>{type}</Checkbox>
        </Col>))}
      </Row>
    </Checkbox.Group>
  );
};

export default ProductCLasses;
