import React, { Component } from "react";
import styled from "styled-components";
import _ from "lodash";

//ListShowServiceCenter
const WrapperContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
`;
const TextWarning = styled.span`
  font-size: 14px;
  color: #e50914;
  margin-top: 20px;
`;
const WrapperNameProduct = styled.div`
  width: 40%;
  /* align-items: center; */
  display: flex;
  margin-top: 30px;
  flex-direction: column;
  justify-content: flex-start;
`;
const NameProduct = styled.span`
  font-size: 15px;
  font-weight: normal;
  color: #000000;
  margin-top: 12px;
`;

export default class ListUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notifiled: "Bấm lấy dữ liệu để hiển thị thông tin về nick name",
      testError: true
    };
  }

  render() {
    if (this.state.testError) {
      return (
        <WrapperContent>
          <TextWarning>{this.state.notifiled}</TextWarning>
        </WrapperContent>
      );
    }
    return (
      <WrapperContent>
        <WrapperNameProduct>
          <NameProduct>Tên : aada</NameProduct>
          <NameProduct>Giới tính : aada</NameProduct>
          <NameProduct>Email : aada</NameProduct>
        </WrapperNameProduct>
      </WrapperContent>
    );
  }
}
