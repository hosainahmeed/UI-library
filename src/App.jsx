/* eslint-disable no-unused-vars */
import React from "react";
import FormWrapper from "./UI Components/FormWrapper";
import InputField from "./UI Components/Form/Input Field/InputField";
import SelectField from "./UI Components/Form/Select Dropdown/SelectField";
import CheckboxField from "./UI Components/Form/CheckboxField/CheckboxField";
import RadioField from "./UI Components/Form/RadioField/RadioField";
import FileUpload from "./UI Components/Form/FileUpload/FileUpload";
import DynamicForm from "./UI Components/Form/Advance Form/DynamicForm/DynamicForm ";
import ButtonGroup from "./UI Components/Button/ButtonGroup/ButtonGroup";
import Login from "./UI Components/AuthForms/LoginForms/Login";
import Register from "./UI Components/AuthForms/RegisterForms/Register";

const App = () => {
  const handleSubmit = (values) => {
    console.log("Form Values:", values);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-md shadow-md w-full max-w-lg">
        <h2 className="text-xl font-semibold mb-4">Sign Up Form</h2>
        <Register />
        <Login />
        <FormWrapper onFinish={handleSubmit}>
          <InputField
            label="Name"
            name="name"
            rules={[{ required: true, message: "Please enter your name" }]}
            placeholder="Enter your name"
          />

          <InputField
            label="Email"
            name="email"
            type="email"
            rules={[{ required: true, message: "Please enter your email" }]}
            placeholder="Enter your email"
          />

          <InputField
            label="Password"
            name="password"
            type="password"
            rules={[{ required: true, message: "Please enter your password" }]}
            placeholder="Enter your password"
          />

          <SelectField
            label="Role"
            name="role"
            options={[
              { value: "developer", label: "Developer" },
              { value: "designer", label: "Designer" },
              { value: "manager", label: "Manager" },
            ]}
            placeholder="Select your role"
            rules={[{ required: true, message: "Please select your role" }]}
          />

          <CheckboxField
            label="Accept Terms and Conditions"
            name="terms"
            rules={[{ required: true, message: "You must accept the terms" }]}
          />
          <FileUpload action="https://api.example.com/upload" />

          <RadioField
            label="Gender"
            name="gender"
            options={[
              { value: "male", label: "Male" },
              { value: "female", label: "Female" },
            ]}
            rules={[{ required: true, message: "Please select your gender" }]}
          />
        </FormWrapper>
        <DynamicForm />
        <ButtonGroup
          buttons={[
            {
              label: "Submit",
              type: "primary",
              onClick: () => console.log("Submit clicked"),
            },
            {
              label: "Cancel",
              type: "default",
              onClick: () => console.log("Cancel clicked"),
              danger: true,
            },
          ]}
        />
      </div>
    </div>
  );
};

export default App;
