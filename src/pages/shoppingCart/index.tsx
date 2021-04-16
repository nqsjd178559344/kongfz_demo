import React, { useEffect, useState } from "react";
import { InputNumber, Checkbox, Radio } from "antd";
import data from "./constant";
import "./index.less";
import classNames from "classnames";

console.log(data, "data");

interface Item {
  id: string;
  name: string;
  author: string[];
  introduction: string;
  price: number;
  max: number;
  backgroundImage: string;
  backgroundColor: string;
}

interface ShopItem {
  shopId: string;
  shopName: string;
  shopAddress: string;
  shopOwner: string;
  shopOwnerIsOnline: boolean;
  list: Item[];
}

const ShoppingCart = () => {
  const [hasChooseNum, setHasChooseNum] = useState(0);
  const handleSettle = () => {
    console.log("去结算啦");
  };

  return (
    <ul className="ul">
      {/* <div className="selectAll">

      </div> */}
      {data &&
        data.map((item: ShopItem) => {
          return (
            <li key={item.shopId}>
              <div className="shop">
                <div className="checkBox">
                <Checkbox />
                </div>
                <div className="shopName m_r8 bold">{item.shopName}书屋</div>
                <div className="shopAddress m_r25 gray">{item.shopAddress}</div>
                <div className="shopOwner m_r8">{item.shopOwner}</div>
                <div
                  className={classNames("shopOwnerIsOnline", {
                    online: item.shopOwnerIsOnline,
                    offline: !item.shopOwnerIsOnline,
                  })}
                >
                  {item.shopOwnerIsOnline ? "在线交谈" : "离线留言"}
                </div>
              </div>
              <div className="list">
                {item.list.map((i) => {
                  return <div key={i.id}>{i.name}</div>;
                })}
              </div>
            </li>
          );
        })}
      <div className="fixed-bottom">
        <Checkbox>全选</Checkbox>
        <span className="total">已选择 {1} 件商品</span>
        <span className="totalCountWrapper">
          <span className="fontSize18"> 总价 ￥</span>
          <span className="totalCount fontSize26">{200}</span>
          <span className="fontSize26">.</span>
          <span className="totalCountFixed fontSize20">00</span>
        </span>
        <div
          onClick={handleSettle}
          style={
            hasChooseNum
              ? {
                  backgroundColor: "#FDB400",
                  color: "#FFF",
                }
              : {
                  backgroundColor: "#EAEAEA",
                  color: "#1A1A1A",
                }
          }
          className="settle"
        >
          去结算
        </div>
      </div>
    </ul>
  );
};

export default ShoppingCart;
