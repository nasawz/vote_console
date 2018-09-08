import * as React from 'react';

export interface DetailProps {}

export default class Detail extends React.Component<DetailProps, any> {
  public render() {
    return (
      <div>
        <div className="Detail__detail-wrap">
          <ul className="Detail__panel">
            <div className="Detail__img-swipe">
              <div className="mint-swipe">
                <div className="mint-swipe-items-wrap">
                  <div className="mint-swipe-item is-active">
                    <img src="" className="Detail__avatar" />
                  </div>
                </div>
                <div className="mint-swipe-indicators">
                  <div className="mint-swipe-indicator is-active" />
                </div>
              </div>
            </div>
            <li className="Detail__tr2">
              <span className="Detail__title">aa</span>
            </li>
            <li className="Detail__tr">
              <span className="Detail__desc">asdfasdfasdf</span>
            </li>
            <li className="Detail__tr">
              <span>
                <span
                  className="k-i-time-o Detail__time-pic"
                  style={{
                    color: 'rgb(57, 150, 246)'
                  }}
                />
              </span>
              <span className="Detail__label-name">距离结束</span>
              <span className="Detail__count-down"> 6天 20:41:02</span>
              <button
                className="Detail__vote-btn"
                style={{
                  borderColor: 'rgb(57, 150, 246)',
                  color: 'rgb(57, 150, 246)'
                }}
              >
                投我一票
              </button>
            </li>
            <li className="Detail__tr">
              <div className="Detail__un-present-rank">
                <div className="Detail__vote-num">已投 2 票</div>
                <div className="Detail__rank">当前为第1名</div>
              </div>
            </li>
          </ul>
          <ul className="Detail__activity-info">
            <img
              src=""
              style={{
                width: '100%'
              }}
            />
            <li className="Detail__act-li">
              <span className="Detail__act-name">新建投票活动</span>
              <span
                className="Detail__touch"
                style={{
                  color: 'rgb(57, 150, 246)'
                }}
              >
                回首页
              </span>
            </li>
            <li
              className="Detail__act-li Detail__shadow"
              style={{
                paddingTop: '0px',
                display: 'none'
              }}
            >
              <span className="Detail__act-info">
                活动介绍：
                <span className="Detail__activity-desc" />
              </span>
            </li>
          </ul>
          <div
            className="Detail__preview"
            style={{
              display: 'none',
              touchAction: 'none',
              userSelect: 'none'
            }}
          >
            <img src="" className="Detail__preview-img" />
          </div>
        </div>
        <div style={{ display: 'none' }}>
          <div className="Alert__backdrop" />
          <div className="Alert__remind-wrap">
            <div className="Alert__content-wrap">
              <div className="Alert__close-alert">
                <i className="k-i-close-o" />
              </div>
              <div className="Alert__success-pic">
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAXgAAAD4CAMAAADRhA34AAABO1BMVEVMaXHPztTPztTPztTPztTPztTPztTPztTPztTPztTPztTPztTPztTPztTPztTPztTPztTPztTPztTPztTPztTPztTPztTPztTPztTPztTPztTPztTPztTPztTPztTPztTPztTPztTPztTPztTPztTPztTPztTPztTPztTPztTPztTPztTPztTPztTPztTPztTPztTPztTPztTPztTPztTPztTPztTPztTPztTPztTPztTPztTPztTPztTPztTPztTPztTPztTPztTPztTPztTPztTPztTs7PHg3+f6+vr5+fn29ffU09nj4unR0Nbs6/Df3ubt7PDY2N3p6O7X1tzj4+bi4eja2d7i4unc3OLf3+Lw8PLv7/H49/j4+Pnz8/Th4OTm5evT0tnr6u/y8vP09PXe3eXr6+35+fogV83RAAAARnRSTlMA7f617/fMBZHXFtoC0hj5abv9HBqJlSq5DKG/QcNRZN0J7OfUrfNweOLIJi9JWsWykvKOTNFUHkR/cyH1PINuzoepX3wS5Zif0gAACMJJREFUeNrt3WtbGkcYxvFNJSBi5eQJT1FijibVaJqkKY1J29zuLioGCA0RkojG9Pt/gr5Y5MzM7ELX3fX+v+SCevV3kXnGUQdNY4wxxhhjjDHGGGOMMcYYY4wxxhhjjDHGGGOMMcYYY4wxxhhjjDF2Y5p+urQeh6BI9/Mzoufej/75IkJTlbaWIWmr+wULsufH1qgq70lW5ogH3a/Yl74Ac9OElTRzV8642cU4vQkFecpKWlJQRKLzFQmVV+AFaYW9jAPAcfVEH1IDAOKv2q9YiQNAY9jzT6qHAIBHnLDCHgLA8aU+tCoAIJ5orjbTiRwAoDr8FXoRAPALcUUtAkBRoKiXm+v8/lYks7DfXN/LolfohwBwj7ii7srevvpJo38Bb5wI4asA8Ii4ouIAIGbsl5e46ycAECeuKACALnEsd7uXJe66DgAg7qjwul7teNM3qtKnE35c8Lp+WW4cA8eN8qXCk+3Ar63ezi2vEX48qcPv3dRvdK8Zfg23E5nMfhzPCe8q/CpeW9/GLRPeVfgcMpqmabMIEf464N8T3mX4Zexrmqa9xiLhXYV/jviD9NTrOJ4S3t3t5BtrO/kbt5Muw2vPk6FQ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"
                  className="Alert__success-image"
                />
              </div>
              <div className="Alert__remind-text">
                <pre className="Alert__remind">投票失败</pre>
              </div>
              <button
                className="Alert__back"
                style={{
                  backgroundColor: 'rgb(57, 150, 246)',
                  color: 'rgb(255, 255, 255)'
                }}
              >
                确认
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
