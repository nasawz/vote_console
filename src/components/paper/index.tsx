import * as React from 'react';
import './style';

export interface PaperProps {}

export default class Paper extends React.Component<PaperProps, any> {
  public render() {
    let { children } = this.props;
    return (
      <div className="App__pcWrap">
        <div className="Charts__wrap">
          <div
            className="Charts__head-wrap"
            style={{
              backgroundColor: 'rgb(57, 150, 246)'
            }}
          >
            <img src="//static-1252921496.file.myqcloud.com/vote/images/1pqXw__background.png" />
          </div>
          <div className="Charts__content-wrap">
            <div>
              <div className="Charts__model-wrap">
                <img
                  src="//static-1252921496.file.myqcloud.com/vote/images/2P21A__star.png"
                  className="Charts__model"
                />
                <span className="Charts__circle-tool Charts__circle1" />
                <span className="Charts__show-add">+</span>
                <span className="Charts__circle-tool Charts__circle2" />
                <span className="Charts__circle-tool Charts__circle3" />
              </div>
            </div>
            <div className="Charts__text">
              <p className="Charts__name">新建投票活动</p>
              <div className="Charts__list">
                <span>名次</span> <span className="Charts__list-name">名称</span>
                <span className="Charts__list-num">票数</span>
              </div>
              <div className="Charts__wrap-bottom">
                <ul className="Charts__model-ul">
                  <li>
                    <img src="data:image/png;base64,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" />
                    <p className="Charts__model-name Charts__model-name1">aa</p>
                    <p
                      className="Charts__model-num Charts__model-num1"
                      style={{ color: 'rgb(57, 150, 246)' }}
                    >
                      2<span className="Charts__ticket-unit">票</span>
                    </p>
                  </li>
                  <li>
                    <img src="data:image/png;base64,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" />
                    <p className="Charts__model-name Charts__model-name1">aa</p>
                    <p
                      className="Charts__model-num Charts__model-num1"
                      style={{ color: 'rgb(57, 150, 246)' }}
                    >
                      2<span className="Charts__ticket-unit">票</span>
                    </p>
                  </li>
                  <li>
                    <img src="data:image/png;base64,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" />
                    <p className="Charts__model-name Charts__model-name1">aa</p>
                    <p
                      className="Charts__model-num Charts__model-num1"
                      style={{ color: 'rgb(57, 150, 246)' }}
                    >
                      2<span className="Charts__ticket-unit">票</span>
                    </p>
                  </li>
                  <li>
                    <div
                      className="Charts__circle"
                      style={{
                        backgroundColor: 'rgb(57, 150, 246)'
                      }}
                    >
                      <span className="Charts__number">4</span>
                    </div>
                    <p className="Charts__model-name Charts__model-name1">aa</p>
                    <p
                      className="Charts__model-num Charts__model-num1"
                      style={{ color: 'rgb(57, 150, 246)' }}
                    >
                      2<span className="Charts__ticket-unit">票</span>
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {children}
      </div>
    );
  }
}
