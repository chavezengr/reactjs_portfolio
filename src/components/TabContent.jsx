import React from "react";

const TabContent = ({ children, ...props }) => {
  return (
    <>
      <div {...props}>{children}</div>
    </>
  );
};

export default TabContent;
