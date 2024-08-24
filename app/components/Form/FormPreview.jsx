import React from "react";

const FormPreview = ({ formSection, isMobileView }) => {
  const {
    title: { content: titleContent, color: titleClr },
    description: { content: descriptionContent, color: descriptionClr },
    background: { color: bgClr },
    button: { color: btnClr, content: btnContent },
    form: { color: formBgClr, inputs },
  } = formSection;

  return (
    <div
      className={`w-full ${isMobileView ? "h-[36rem]":"h-[28rem]"} xxs:p-4 flex justify-center items-center`}
      style={{ backgroundColor: bgClr !== "none" && bgClr }}
    >
      
      <div
        className={`h-full w-full flex ${
          isMobileView ? "flex-col" : "flex-row"
        } justify-center items-center gap-4`}
      >
        {(titleContent || descriptionContent) &&  <div
          className={`${isMobileView ? "h-1/2" : "h-full"} ${
            isMobileView ? "w-full" : "w-1/2"
          } flex flex-col justify-center items-center text-center`}
        >
          <div className="flex flex-col justify-center items-center h-full">
            <div
              className="text-sm sm:text-2xl font-extrabold w-full flex justify-center"
              style={{ color: titleClr !== "none" && titleClr }}
            >
              {titleContent}
            </div>
            <div
              className={`text-xs sm:text-sm font-extralight`}
              style={{ color: descriptionClr !== "none" && descriptionClr }}
            >
              {descriptionContent}
            </div>
          </div>
        </div> }
        <div className={`${isMobileView ?"h-1/2":"h-full"} ${isMobileView ?"w-full":"w-1/2"}  flex justify-center items-center`}>
        <div
          className={`card bg-base-100 ${
            isMobileView ? "w-full" : "w-96"
          } shadow-xl`}
          style={{ backgroundColor: formBgClr !== "none" && formBgClr }}
        > 
          <div className="card-body">
            <div className="flex flex-col gap-2">
            {inputs.map(({ type, name, label, placeholder, required, value }) =>
              type === "textarea" ? (
                <textarea className="textarea textarea-bordered" placeholder={placeholder} style={{ backgroundColor: formBgClr !== "none" && formBgClr }}></textarea>
              ) : (
                <input
                  type={type}
                  name={name}
                  placeholder={placeholder}
                  required={required}
                  value={value}
                  className="input input-bordered w-full max-w-xs"
                  style={{ backgroundColor: formBgClr !== "none" && formBgClr }}
                />
              )
            )}
            </div>
            <div className="card-actions justify-end">
              <button
                className="btn btn-primary border-none"
                style={{ backgroundColor: btnClr !== "none" && btnClr }}
              >
                {btnContent}
              </button>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default FormPreview;
