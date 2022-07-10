import React from "react";

export interface IMessageCardProps {
  title: string,
  message: string,
  buttonText: string
}

const MessageCard: React.FC<IMessageCardProps> = ({ title, message, buttonText }) => {
  return (
    <div className="text-center bg-blue-50">
      <div className="bg-blue-200 text-base font-medium tracking-widest p-2.5">{title}</div>
      <div className="p-4 text-left">
        {message}
      </div>
      <button className="bg-blue-300 border-blue-300  mb-6">{buttonText}</button>
    </div>
  );
};

export default MessageCard;
