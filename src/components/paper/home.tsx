import * as React from 'react';

export interface HomeProps {}

export default class Home extends React.Component<HomeProps, any> {
  public render() {
    return (
      <div>
        <div className="List__whole">
          <div className="Header__panel">
            <ul className="Header__avatar-content">
              <img src="" className="Header__avatar" />
            </ul>
            <ul>
              <li className="Header__title">投票活动</li>
            </ul>
            <div>
              <ul className="Header__card">
                <li>
                  <span className="Header__label-name">投票规则： </span>
                  <span>
                    <span className="Header__label-content">每天可投10票</span>
                  </span>
                </li>
                <li>
                  <span className="Header__label-name">报名时间： </span>
                  <span>
                    <span className="Header__label-content">
                      2018-09-07 21:15 至 2018-09-14 21:15
                    </span>
                  </span>
                </li>
                <li>
                  <span className="Header__label-name">投票时间： </span>
                  <span>
                    <span className="Header__label-content">
                      2018-09-07 21:15 至 2018-09-14 21:15
                    </span>
                  </span>
                </li>
              </ul>
              <ul className="Header__card Header__apply-wrap">
                <span className="Header__icon-style">
                  <span
                    className="k-i-time-o Header__time-pic"
                    style={{
                      color: 'rgb(57, 150, 246)'
                    }}
                  />
                </span>
                <span className="Header__label-name">距离结束</span>
                <span className="Header__count-down"> 6天 22:48:19</span>
                <button
                  className="Header__apply-btn"
                  style={{
                    borderColor: 'rgb(57, 150, 246)',
                    color: 'rgb(57, 150, 246)'
                  }}
                >
                  报名
                </button>
              </ul>
              <ul className="Header__statistics-wrap">
                <li className="Header__statistics-item">
                  <span className="Header__font">1</span> <br />
                  <span className="Header__label-content">参与选手</span>
                </li>
                <li className="Header__statistics-item">
                  <span className="Header__font">1</span> <br />
                  <span className="Header__label-content">累计投票</span>
                </li>
                <li className="Header__statistics-item">
                  <span className="Header__font">9</span> <br />
                  <span className="Header__label-content">累计访问</span>
                </li>
              </ul>
              <ul className="Header__to-ranking">
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAMAAADzN3VRAAAByFBMVEVMaXH5xRP5xRP7wRP8vxP6xBP5xRP+2DL81Sv8vxP7wBP7wBP8vhP6wxP5xRP6xBP8vxP8vhP7whP6wxP7whP5xhP8vxP7wBP8vxP7wBP7wBP7wRP8vxP7wRP7wRP6xBP7wBP6xBP5xhP5xhP/3Dr5xhP/3Dr5xhP/2zj+2jX/2zj5xxP+2DL5xhP5xxP4yBP+2jX5xxP4yBP+2DL4yRP5xxP5xxP4yBP5xxP81Sv4yRP4yBP4yxb4yBP+2DL4yxb4yRP4yBP4yxb4yBP4yRP81Cj81Sv4yxb4yRP5zBn70SL70iX5zhz5zBn4yRP5zBn4yxb70iX81Cj4yRP4yxb5zBn6zx/4yRP91y75zBn4yxb6zx/70SL5zhz81Cj70iX70SL5zhz81Cj6zx/5zhz81Sv81Sv70iX5zBn4yxb81Cj81Sv5zhz5zBn81Cj70iX70iX70SL70SL6zx/70iX6zx/5zhz81Cj70SL5zhz5zBn6zx/5zBn4yxb5zhz91y781Sv70iX/3Dr/2zj+2jX+2DL81Cj70SL6zx/5zhz5zBn8vhP4yRP4yxb4yBP5xxP8vxP5xhP5xRP7wBP7wRP6xBP7whP6wxOtc2Y5AAAAf3RSTlMAcv0PgSz6cGDXD1KvcGXC5596YGXQ5syOEtva/gbEM125ecuXFn9zmZCA9MESfvl/8PyvcgUD+3SfxsbBGGkIYhKqvM9JjrTVHu0ecAsU9wz8MA660bHL8A/AS5U47BZW4fC1A+jyzmEB3vBXEfkJuNRnmCbGRwOHAVE83KvUxnU0JAAAAQhJREFUGBl1wQNDxGAABuA3bpdt27Yu27ZtG7c0tK26hb9bq7u2r9bzQJVwTUqCXcoNKQ12qbekHKioTxl3pHyKoqpw9Y9hWBZoutRCaqTpxTXMTgIN96ReHG2uYomZQhtD6NnCPrONcXYaaGX1doBd9hhj3BwwyOntAQfcGeZn+Am083rrOOQvT4BlYaCjRdDpGtk4F04BrPRLTeYKSVPbPSpdQNXZLJYViJrqenGoD18qy+Vs+UdesVxXA5vCrPRHTW5JETSJcYHP3+KTM/GLg6PVanX1goFo79dYFxjyfPeHMb+3ABhyCn+JisRfoTFhiqIEu7uBEGIKerKJ8DE5Q+PxoOcL1Qd5RLICJGFsaQAAAABJRU5ErkJggg=="
                  className="Header__cup-pic"
                />
                查看榜单
              </ul>
            </div>
          </div>
          <div className="List__search-wrap">
            <form className="List__search-form">
              <input
                type="search"
                placeholder="请输入投票项编号或名称"
                className="List__search-input"
              />
            </form>
            <span className="k-i-search-2 kz-e-search List__search-img" />
          </div>
          <div className="List__no-vote" style={{ display: 'none' }}>
            暂无投票项
          </div>
          <div className="List__no-vote" style={{ display: 'none' }}>
            抱歉，未搜索到
          </div>
          <div>
            <div
              className="List__double-flow-wrap"
              style={{
                height: '583.4px',
                position: 'relative'
              }}
            >
              <div
                className="FlowItem__item List__left-column"
                style={{
                  left: '0px',
                  float: 'none',
                  position: 'absolute',
                  top: '0px'
                }}
              >
                <div>
                  <div className="">
                    <div
                      className="FlowItem__num"
                      style={{
                        backgroundColor: 'rgb(57, 150, 246)',
                        color: 'rgb(255, 255, 255)'
                      }}
                    >
                      1
                    </div>
                    <img src="" className="FlowItem__avatar" />
                  </div>
                  <div>
                    <label className="FlowItem__title">aa</label>
                    <div className="FlowItem__desc">asdfasdfasdf</div>
                  </div>
                </div>
                <div>
                  <span
                    className="FlowItem__vote-num"
                    style={{
                      color: 'rgb(57, 150, 246)'
                    }}
                  >
                    1
                  </span>
                  <span className="FlowItem__vote-num-desc">票</span>
                </div>
                <div className="FlowItem__btn">
                  <div>
                    <div style={{ display: 'none' }}>
                      <div className="Qrcode__backdrop">
                        <div className="Qrcode__content-wrap">
                          <div
                            className="Qrcode__slide Qrcode__slide-animation"
                            style={{
                              boxShadow: 'rgb(57, 150, 246) 0px 8px 12px inset',
                              display: 'none'
                            }}
                          />
                          <div
                            className="Qrcode__square Qrcode__square1__1Zbdc_0"
                            style={{
                              borderTop: '2px solid rgb(57, 150, 246)',
                              borderLeft: '2px solid rgb(57, 150, 246)'
                            }}
                          />
                          <div
                            className="Qrcode__square Qrcode__square2"
                            style={{
                              borderTop: '2px solid rgb(57, 150, 246)',
                              borderRight: '2px solid rgb(57, 150, 246)'
                            }}
                          />
                          <div
                            className="Qrcode__square Qrcode__square3"
                            style={{
                              borderBottom: '2px solid rgb(57, 150, 246)',
                              borderLeft: '2px solid rgb(57, 150, 246)'
                            }}
                          />
                          <div
                            className="Qrcode__square Qrcode__square4"
                            style={{
                              borderBottom: '2px solid rgb(57, 150, 246)',
                              borderRight: '2px solid rgb(57, 150, 246)'
                            }}
                          />
                          <div className="Qrcode__img-wrap__XD9xN_0">
                            <img src="" className="Qrcode__image" />
                          </div>
                          <div className="Qrcode__remind-wrap">
                            <p className="Qrcode__remind-p">
                              长按后
                              <span
                                className="Qrcode__remind-span"
                                style={{ color: 'rgb(57, 150, 246)' }}
                              >
                                识别二维码
                              </span>
                              完成投票
                            </p>
                            <p className="Qrcode__remind-p">
                              识别后请
                              <span
                                className="Qrcode__remind-spa"
                                style={{ color: 'rgb(57, 150, 246)' }}
                              >
                                回复“投票”
                              </span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <button
                      className="VoteButton__subcontent VoteButton__small undefined"
                      style={{
                        backgroundColor: 'rgb(57, 150, 246)',
                        color: 'rgb(255, 255, 255)'
                      }}
                    >
                      <span>投我一票</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="PcCode__code">
            <div className="PcCode__code-content">
              <img
                src="//www.kuaizhan.com/common/encode-png?data=https%3A%2F%2Fvote165b42bec6a.kuaizhan.com%2Fvote%2Fmobile.html%3Factivity_id%3D5b9279d62bd4c3000190ac90%23%2Flist%2F5b9279d62bd4c3000190ac90"
                alt=""
              />
              <div className="PcCode__code-text">
                扫描二维码
                <br />
                用手机访问本投票
              </div>
            </div>
          </div>
        </div>
        <div className="LoginTab__title-wrap slideOut">
          <div className="LoginTab__wrap">
            <img src="" className="LoginTab__avatar" />
            <span className="LoginTab__right-wrap">立即登录</span>
          </div>
        </div>
        <div>
          <div style={{ display: 'none' }}>
            <div className="Qrcode__backdrop">
              <div className="Qrcode__content-wrap">
                <div
                  className="Qrcode__slide Qrcode__slide-animation"
                  style={{
                    boxShadow: 'rgb(57, 150, 246) 0px 8px 12px inset',
                    display: 'none'
                  }}
                />
                <div
                  className="Qrcode__square Qrcode__square1"
                  style={{
                    borderTop: '2px solid rgb(57, 150, 246)',
                    borderLeft: '2px solid rgb(57, 150, 246)'
                  }}
                />
                <div
                  className="Qrcode__square Qrcode__square2"
                  style={{
                    borderTop: '2px solid rgb(57, 150, 246)',
                    borderRight: '2px solid rgb(57, 150, 246)'
                  }}
                />
                <div
                  className="Qrcode__square Qrcode__square3"
                  style={{
                    borderBottom: '2px solid rgb(57, 150, 246)',
                    borderLeft: '2px solid rgb(57, 150, 246)'
                  }}
                />
                <div
                  className="Qrcode__square Qrcode__square4"
                  style={{
                    borderBottom: '2px solid rgb(57, 150, 246)',
                    borderRight: '2px solid rgb(57, 150, 246)'
                  }}
                />
                <div className="Qrcode__img-wrap">
                  <img src="" className="Qrcode__image" />
                </div>
                <div className="Qrcode__remind-wrap">
                  <p className="Qrcode__remind-p">
                    长按后
                    <span className="Qrcode__remind-span" style={{ color: 'rgb(57, 150, 246)' }}>
                      识别二维码
                    </span>
                    完成投票
                  </p>
                  <p className="Qrcode__remind-p">
                    识别后请
                    <span className="Qrcode__remind-span" style={{ color: 'rgb(57, 150, 246)' }}>
                      回复“投票”
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="Bottom__bottom-wrap">
          <img src="" alt="" className="Bottom__logo" />
          <div className="Bottom__vote-info___FmyY_0">本投票由&nbsp;nasawz&nbsp;技术支持</div>
        </div>
        <div style={{ display: 'none' }}>
          <div className="Loading__center" />
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
                  src="//static-1252921496.file.myqcloud.com/vote/images/2UDzh__alert-success.png"
                  className="Alert__success-image"
                />
              </div>
              <div className="Alert__remind-text">
                <pre className="Alert__remind">投票成功</pre>
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
