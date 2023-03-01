import React from "react";
import "../../assets/styles/index.css";
import signup_bg from "../../assets/images/signup_bg.jpg";
import { Button, DatePicker, Form, Input, Select } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

export default function SignUpScreen() {
    const onFinish = () => { }
    return (
        <div className="register-container w-full h-full">
            {/* Form user info */}
            <div className="register w-1/2 pt-24 h-full">
                <div className="max-w-lg h-4/5 m-auto px-4 pt-10 shadow-lg shadow-gray-500/50">
                    <h1 className="h-12 text-4xl">Sign-up Acount</h1>
                    <p className="h-24 text-lg font-light text-slate-500">
                        Thanh toán tiền điện online qua Internet Banking/Mobile Banking.
                        Đăng ký ngay để sử dụng nhiều tiện ích quản lý chi tiêu khác.
                    </p>
                    <Form
                        labelCol={{
                            span: 4,
                        }}
                        wrapperCol={{
                            span: 15,
                        }}
                        layout="horizontal"
                        initialValues={{
                            remember: true,
                        }}
                        size="large"
                        style={{
                            maxWidth: 600,
                        }}
                        onFinish={onFinish}
                    >
                        <div className="flex flex-row ">
                            <Form.Item
                                label="Surname"
                                labelCol={{
                                    span: 8,
                                }}
                                wrapperCol={{
                                    span: 20,
                                }}
                            >
                                <Input required={true} />
                            </Form.Item>
                            <Form.Item
                                label="Last Name"
                                labelCol={{
                                    span: 9,
                                }}
                                wrapperCol={{
                                    span: 10,
                                }}
                            >
                                <Input required={true} />
                            </Form.Item>
                        </div>
                        <Form.Item label="Person Id">
                            <Input
                                prefix={<UserOutlined className="site-form-item-icon" />}
                                required={true}
                            />
                        </Form.Item>
                        <Form.Item label="Email">
                            <Input required={true} />
                        </Form.Item>
                        <Form.Item label="Adress">
                            <Input />
                        </Form.Item>
                        <Form.Item
                            label="Gender"
                            wrapperCol={{
                                span: 6,
                            }}
                        >
                            <Select placeholder="none">
                                <Select.Option value="male">Male</Select.Option>
                                <Select.Option value="female">Female</Select.Option>
                                <Select.Option value="orther">Other</Select.Option>
                            </Select>
                        </Form.Item>
                        <Form.Item label="DatePicker">
                            <DatePicker />
                        </Form.Item>
                        <Form.Item>
                            <Button
                                type="primary"
                                htmlType="submit"
                                className="w-full ml-24 font-semibold bg-blue-400"
                            >
                                submit
                            </Button>
                        </Form.Item>

                        <div className="flex w-full mt-2 justify-end lg:mt-0">
                            <p>Goback!</p>
                            <Link
                                to="../"
                                className="ml-2 text-blue-400 font-semibold"
                                onClick={() => { }}
                            >
                                Sign In
                            </Link>
                        </div>
                    </Form>
                </div>
            </div>

            {/* Sub bacground image */}
            <div
                className="register-bg w-3/5 bg-blue-200"
                style={{
                    backgroundImage: `url(${signup_bg})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "100% 100%",
                }}
            ></div>
        </div>
    );
}
