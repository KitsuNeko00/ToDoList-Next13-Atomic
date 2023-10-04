"use client";

interface IProps {
  children: React.ReactNode;
}

function ClientProvider({ children }: IProps): JSX.Element {
  return <>{children}</>;
}

export default ClientProvider;
