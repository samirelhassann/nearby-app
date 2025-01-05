import { ComponentType, ReactNode } from "react";
import { ErrorBoundary, FallbackProps } from "react-error-boundary";

import { QueryErrorResetBoundary } from "@tanstack/react-query";

interface QueryErrorBoundaryProps {
  children: ReactNode;
  errorBoundaryComponent: ComponentType<FallbackProps>;
}

export default function QueryErrorBoundary({
  children,
  errorBoundaryComponent,
}: QueryErrorBoundaryProps) {
  return (
    <QueryErrorResetBoundary>
      {({ reset }) => (
        <ErrorBoundary
          onReset={reset}
          FallbackComponent={errorBoundaryComponent}
        >
          {children}
        </ErrorBoundary>
      )}
    </QueryErrorResetBoundary>
  );
}
