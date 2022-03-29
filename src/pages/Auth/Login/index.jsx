import { useState, useRef } from "react"

import { Form, Input, Button, message } from "antd"
import Heading from "components/Heading"

import styled from "styled-components"
import { ERRS } from "utils/exceptions"
import { CallLogin } from "api/auth/login"

import { useHistory } from "react-router-dom"

import Verification from "../Verification"

export default function Login() {
  const [isLoading, setLoading] = useState(false)
  const [isNotVerified, setNotVerified] = useState(false)
  const userEmail = useRef("")

  const { push: redirectTo } = useHistory()

  const onFinish = async values => {
    setLoading(true)
    const res = await CallLogin(values)

    if (res.ok === 0) {
      if (res.code === ERRS.INVALID_BODY || res.code === ERRS.INVALID_LOGIN) {
        message.error("Invalid Email or Password")
      } else if (res.code === ERRS.NOT_VERIFIED) {
        userEmail.current = values.email
        setNotVerified(true)
      } else if (res.code === ERRS.SERVER_ERROR) {
        message.error(
          "Oops! Unknown Error Occurred on the Server, Please Try again"
        )
      }
    } else if (res.ok === 1) {
      window.location.href = "/data-forecast"
    }
    setLoading(false)
  }

  if (isNotVerified)
    return (
      <Verification
        emailAddress={userEmail.current}
        sendCodeAuto={true}
        onSuccess={() => (window.location.href = "/data-forecast")}
      />
    )
  else
    return (
      <>
        <Wrapper>
          <Form
            size='large'
            name='userLogin'
            initialValues={{ remember: true }}
            onFinish={onFinish}
            layout={"vertical"}
            autoComplete='on'>
            <Heading style={{ textAlign: "center", marginBottom: "25px" }}>
              Sign In
            </Heading>
            <Form.Item
              label='Email'
              name='email'
              rules={[
                {
                  required: true,
                  message: "Please enter your Email",
                },
                {
                  pattern:
                    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                  message: "Please enter a valid Email Address",
                },
              ]}>
              <Input />
            </Form.Item>

            <Form.Item
              label='Password'
              name='password'
              rules={[
                {
                  required: true,
                  message: "Please enter your Password",
                },
              ]}>
              <Input.Password />
            </Form.Item>

            <Form.Item>
              <Button
                loading={isLoading}
                style={{ width: "100%", marginTop: "10px" }}
                type='primary'
                htmlType='submit'>
                Sign In
              </Button>
            </Form.Item>
            <Button
              type='link'
              onClick={() => redirectTo("/auth/register")}
              style={{ padding: "3px", marginTop: "-10px" }}>
              Not registered yet? Create Account.
            </Button>
          </Form>
        </Wrapper>
        <div style={{ position: 'fixed', bottom: '0', padding: '20px', width: '100%' }}>
          <center>
            <p>Made with <span style={{ color: 'red' }}> &#10084;</span></p>
          </center>
        </div>
      </>
    )
}

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  form {
    width: 90%;
    max-width: 500px;

    label::before {
      display: none !important;
    }

    .ant-form-item-explain-error {
      margin-bottom: 12px;
    }

    .ant-form-item-label {
      padding-bottom: 3px;
      & > label {
        font-size: 16px;
      }
    }
  }
`
