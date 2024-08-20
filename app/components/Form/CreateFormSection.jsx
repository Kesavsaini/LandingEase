import React, { useEffect, useState } from "react";
import SelectFrom from "../SelectFrom";
import { CreateIcon } from "../Icons";
import { useDispatch, useSelector } from "react-redux";
import { addFormSection } from "@/lib/features/landingPage/pageSlice";
import CreateForm from "./CreateForm";

const buttonContent = (
  <div className="flex gap-2">
    Add Form
    <CreateIcon />
  </div>
);

const CreateFormSection = () => {
  const allSections = useSelector((state) => state.page);
  let formsKeysArray = Object.keys(allSections).filter((item) => {
    return item.startsWith("form");
  });
  const dispatch = useDispatch();
  const [formValue, setFormValue] = useState();
  const onButtonClick = () => {
    dispatch(addFormSection());
  };

  const onFormChange = (value) => {
    setFormValue(value);
  };

  useEffect(() => {
    setFormValue(formsKeysArray.at(-1));
  }, [formsKeysArray.at(-1)]);

  useEffect(() => {
    if (!allSections[formValue]) {
      setFormValue(formsKeysArray.at(-1));
    }
  }, [allSections[formValue]]);

  return (
    <div className="w-full flex flex-col justify-center items-center">
      <SelectFrom
        buttonContent={buttonContent}
        list={formsKeysArray}
        onButtonClick={onButtonClick}
        onValueChange={onFormChange}
        value={formValue}
        placeholder={"Form"}
      />
      {formValue && allSections[formValue] && <CreateForm key={formValue} index={parseInt(formValue.substring(5))} formValue={formValue} form={allSections[formValue]} />}
    </div>
  );
};

export default CreateFormSection;
