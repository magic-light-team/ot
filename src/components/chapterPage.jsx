import React, { Component } from 'react';
import './chapterPage.css';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { changePage  } from '../actions/index';

class ChapterPage extends Component {
    state = {}
    render() {
        return (
            <div id="chapter-wrapper" className="chapter-selector" style={{ backgroundImage: 'url(' + process.env.PUBLIC_URL + this.props.pageSetting.backgroundPic + ')' }}>
                {this.props.chapters.map(chapter =>
                    <div key={chapter.levelId}
                        id={"chapter-" + chapter.levelId}
                        className={"chapter chapter-" + chapter.levelId}
                        style={{ backgroundImage: 'url(' + process.env.PUBLIC_URL + chapter.levelPic + ')' }}
                        onClick={event => this.props.changePage(event,"gamePage", chapter.levelId)}>{chapter.levelName}</div>)}
            </div>
        );
    }
}

ChapterPage.propTypes = { changePage: PropTypes.func.isRequired };
const mapStateToProps = state => ({ pageSetting: state.state.gameData.chapterPage, chapters: state.state.gameData.levels });
export default connect(mapStateToProps,{changePage})(ChapterPage);

// export default ChapterPage;
