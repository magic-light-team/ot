import React, { Component } from 'react';
import './chapterPage.css';

class ChapterPage extends Component {
    state = {  }
    render() { 
        return ( 
            <div id="chapter-wrapper" className="chapter-selector">
                { this.props.chapters.map(chapter => 
                    <div key={chapter.levelId} 
                    id={"chapter-"+chapter.levelId} 
                    className={"chapter chapter-"+chapter.levelId } 
                    style={{ backgroundImage: 'url(/img/'+chapter.levelPic+')' }}
                    onClick={() => this.props.changePage("game-page",chapter.levelId)}>{chapter.levelName}</div> ) }
            </div>
        );
    }
}
 

export default ChapterPage;