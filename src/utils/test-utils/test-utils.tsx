import React from "react";
import { render } from "@testing-library/react";

export const renderWithContext = (Context: any, children: any, values: any) => {
  const Provider = () => (
    <Context.Provider value={values}>{children}</Context.Provider>
  );
  return render(<Provider />);
};
