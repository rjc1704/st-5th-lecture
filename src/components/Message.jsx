import React from "react";

const Message = () => {
  console.log("Message 렌더링");
  return (
    <h3 style={{ border: "1px solid black", borderRadius: 5 }}>
      Message Component
    </h3>
  );
};

export default Message;
