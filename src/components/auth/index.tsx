import * as React from "react";

export interface AuthProps {}

export interface AuthState {}

/**
 * 访问控制器
 */
export default class Auth extends React.Component<AuthProps, AuthState> {
  constructor(props: AuthProps) {
    super(props);

    this.state = {};
  }

  public render() {
    let { children } = this.props;
    return <div>{children}</div>;
  }
}
