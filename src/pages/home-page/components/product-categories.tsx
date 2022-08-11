import React, { useEffect, useState } from "react";
import { Checkbox, Col, Row } from "antd";
import type { CheckboxValueType } from "antd/es/checkbox/Group";
import { fetchProductTypes } from "../../../actions/product-actions/product";
import { useTranslation } from "react-i18next";
import { useProductContext } from "../../../store/product-store/product-provider";
import { setCurrentProductTypes } from "../../../actions/product-actions/dispatch-action";

const ProductCLasses: React.FC = () => {
  // TODO: 加入数据后记得给组件加测试
  const { t } = useTranslation();
  const [productTypes, setProductTypes] = useState<string[]>([]);
  const { dispatch } = useProductContext();

  const onChange = (checkedValues: CheckboxValueType[]) => {
    setCurrentProductTypes(dispatch, checkedValues as string[]);
  };

  useEffect(() => {
    fetchProductTypes().then((res) => setProductTypes(res.data));
  }, []);
  return (
    <Checkbox.Group className="w-full pl-16 text-4xl" onChange={onChange}>
      <Row>
        {productTypes.map((type) => (
          <Col key={type} span={6}>
            <Checkbox value={type}>
              {t(`home.product_category_${type}`)}
            </Checkbox>
          </Col>
        ))}
      </Row>
    </Checkbox.Group>
  );
};

export default ProductCLasses;
