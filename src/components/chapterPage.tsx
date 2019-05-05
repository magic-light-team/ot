import React, { Component } from 'react';
import './chapterPage.css';

import { connect } from 'react-redux';
import { IState, chapters } from '../reducers/initialState';
import { appPage } from '../info/data.interfaces';
import { changePage } from '../actions/actions';

import PageHeader from './pageHeader';

export interface Props { //StateFromProps
    pageSetting: appPage,
    chaptersInfo:chapters[],
    changePage: Function;
}

export interface State { // DispatchFromProps
    // changePage: () => void;
}

class ChapterPage extends Component<Props,State> {
    state = {}
    render() {
        return (
            <div id="chapter-wrapper" className="chapter-selector" style={{ backgroundImage: 'url(' + process.env.PUBLIC_URL + this.props.pageSetting.backgroundPic + ')' }}>
            <PageHeader page={true} />
            <div className="chapters">
                {this.props.chaptersInfo.map(chapter =>
                    <div key={chapter.levelId}
                        id={"chapter-" + chapter.levelId}
                        className={"chapter chapter-" + chapter.levelId}
                        style={{ backgroundImage: 'url(' + process.env.PUBLIC_URL + chapter.levelPic + ')' }}
                        onClick={event => this.props.changePage(event,"gamePage", chapter.levelId)}>{chapter.levelName}</div>)}
            </div>
            </div>
                
        );
    }
}

const mapStateToProps = (allState: { gameState: IState }) => ({
    pageSetting: allState.gameState.pageSetting, 
    chaptersInfo: allState.gameState.chaptersInfo
});

const mapDispatchToProps = ({
    changePage: changePage
});

export default connect(mapStateToProps, mapDispatchToProps)(ChapterPage);

// export default ChapterPage;
