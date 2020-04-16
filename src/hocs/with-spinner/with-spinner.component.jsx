import React from "react";
import { UiSpinner } from "../../components/ui-spinner/ui-spinner.component";

export const withSpinner = (WrappedComponent) => ({ isLoading, ...props }) => {
  return isLoading ? <UiSpinner /> : <WrappedComponent {...props} />;
};
