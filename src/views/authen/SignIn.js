import React from "react";
import "../../assets/styles/index.css";
import signin_bg from "../../assets/images/signin_bg.jpg";
import {EyeInvisibleOutlined, EyeTwoTone, LockOutlined, UserOutlined} from "@ant-design/icons";
import { Button, Checkbox, Form, Input } from "antd";
import { Link } from "react-router-dom";
import {Login} from "../../utils/API/AuthAPI"
import {useNavigate} from "react-router-dom";

export default function SignInScreen() {
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };
  return (
    <div className="login-container w-full h-full">
      {/* Form user info */}
      <div className="login w-1/2 pt-48 h-full">
        <div className="max-w-md h-2/3 m-auto px-4 pt-10 shadow-lg shadow-gray-500/50">
          <h1 className="h-12 text-4xl">Login to FastBill</h1>
          <p className="h-20 text-lg font-light text-slate-500">
            Đăng nhập bằng số điện thoại của bạn để khám phá các tính năng hữu
            ích khác.
          </p>
          <Form
            name="normal_login"
            className="login-form"
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
          >
            <Form.Item
              name="username"
              rules={[
                {
                  required: true,
                  message: "Please input your Username!",
                },
              ]}
            >
              <Input
                prefix={<UserOutlined className="site-form-item-icon" />}
                placeholder="Username"
                className="h-12"
              />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[
                {
                  required: true,
                  message: "Please input your Password!",
                },
              ]}
            >
              <Input
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="Password"
                className="h-12"
              />
            </Form.Item>
            <Form.Item>
              <Form.Item name="remember" valuePropName="checked" noStyle>
                <Checkbox>Remember me</Checkbox>
              </Form.Item>


            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit" className="login-form-button w-full h-10 bg-blue-400">
                Log in
              </Button>
              Or <Link to="/signup">register now!</Link>


            </Form.Item>
            <a className="login-form-forgot ml-[70%]" href="">
              Forgot password ?
            </a>
          </Form>
        </div>
      </div>

      {/* Sub bacground image */}
      <div
        className="login-bg w-3/5 bg-blue-200"
        style={{
          backgroundImage: `url(${signin_bg})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "100% 100%",
        }}
      ></div>
    </div>
  );
}
