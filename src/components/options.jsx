import React, { Component } from 'react';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { changeStage } from '../actions/index';

class Options extends Component {
    state = {}
    render() {
        return (
            <div>
                <div className="description-wrapper dialog" style={{ backgroundImage: 'url(' + process.env.PUBLIC_URL + '/img/dialouge.png)' }}>
                    {this.props.desc}</div>
                <div className="btn-wrapper">
                    {this.props.options.map(op =>
                        <button
                            onClick={() => this.props.changeStage(op.nextDialogId, op.score)}
                            key={op.optionId}
                            data-score={op.score}
                            className="btn red-color">{op.title}</button>)}
                </div>
            </div>
        );
    }
}

Options.propTypes = {
    changeStage: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
    options: state.state.currentStage.optionSection.options,
    desc: state.state.currentStage.optionSection.desc,
});

export default connect(mapStateToProps, { changeStage })(Options);

// export default Options;
