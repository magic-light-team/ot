// https://www.youtube.com/watch?v=24UzFeGpI7Y

import React, { Component, Dispatch } from 'react';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

const actions = {
  changeClientName: (): boolean => true,
  changeClientAge: (): boolean => true,
}


// for stateful components
interface State {
  editing: boolean;
}

interface Props extends StateProps, DispatchProps {
  passedProp: number;
}

// <ClientEditoe passedProp={10}>

// Stateless functional component version
// const MyClientComponent: React.SFC<Props> = (props: Props): JSX.Element => (
//   ...render here
// )

// Stateful component class
// const MyClientComponent = React.Component<Props, State> {
//   ...other methods here
// }

const ClientEditoe:JSX.Element = (props: Props) => {
  <div>
    <input type="text" value={props.name} /> <button onClick={props.changeClientName} />
    <input type="text" value={props.age} /> <button onClick={props.changeClientAge} />
  </div>
}

interface StateProps {
  name: string;
  age: number;
}

const mapStateToProps = (state: any): StateProps => ({
  name: state.client.name,
  age: state.client.age,
});

interface DispatchProps {
  changeClientName: typeof actions.changeClientName;
  changeClientAge: typeof actions.changeClientAge;
}

const mapDispatchToProps = (dispatch: Dispatch<any>): DispatchProps => ({
  ...bindActionCreators({
    changeClientName,
    changeClientAge,
  }, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(ClientEditoe);

