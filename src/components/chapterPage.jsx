import React, { Component } from 'react';
import './chapterPage.css';

class ChapterPage extends Component {
    state = {}
    render() {
        return (
            <div id="chapter-wrapper" className="chapter-selector" style={{ backgroundImage: 'url(/img/' + this.props.chapterSetting.backgroundPic + ')' }}>
                {this.props.chapters.map(chapter =>
                    <div key={chapter.levelId}
                        id={"chapter-" + chapter.levelId}
                        className={"chapter chapter-" + chapter.levelId}
                        style={{ backgroundImage: 'url(/img/' + chapter.levelPic + ')' }}
                        onClick={event => this.props.changePage(event,"game-page", chapter.levelId)}>{chapter.levelName}</div>)}
            </div>
        );
    }
}


export default ChapterPage;