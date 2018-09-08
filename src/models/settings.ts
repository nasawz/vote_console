import _ from 'lodash';

export const settings = {
  state: {
    demo: 0,
    layout: '1', // String: 1, 2, 3, 4 and add your own
    boxedLayout: false, // Boolean: true, false
    fixedSidenav: false, // Boolean: true, false
    fixedHeader: false, // Boolean: true, false
    collapsedNav: false, // Boolean: true, false
    offCanvasNav: false, // Boolean: true, false
    offCanvasMobileNav: true, // Boolean: true, false. Mobile only, by default, it's true (off canvas)
    sidenavWidth: 160, // Number
    headerShadow: true, // Boolean: true, false
    sidenavShadow: false, // Boolean: true, false
    colorOption: '32', // String: 11,12,13,14,15,16; 21,22,23,24,25,26; 31,32,33,34,35,36
    theme: 'light' // (WIP) String: light, gray, dark
  },
  reducers: {
    changeLayout(state, layoutOption) {
      return layoutOption;
    },
    toggleBoxedLayout(state, isBoxedLayout) {
      state.isBoxedLayout = isBoxedLayout;
      return state;
    },
    toggleCollapsedNav(state, isCollapsedNav) {
      return _.create(state, { collapsedNav: isCollapsedNav });
    },
    toggleOffCanvasNav(state, isOffCanvasNav) {
      state.collapsedNav = isOffCanvasNav;
      return state;
    },
    toggleFixedSidenav(state, isFixedSidenav) {
      state.isFixedSidenav = isFixedSidenav;
      return state;
    },
    toggleFixedHeader(state, isFixedHeader) {
      state.isFixedHeader = isFixedHeader;
      return state;
    },
    changeSidenavWidth(state, sidenavWidth) {
      state.sidenavWidth = sidenavWidth;
      return state;
    },
    toggleOffCanvasMobileNav(state, isOffCanvasMobileNav) {
      state.isOffCanvasMobileNav = isOffCanvasMobileNav;
      return state;
    },
    changeColorOption(state, colorOption) {
      state.colorOption = colorOption;
      return state;
    },
    changeTheme(state, themeOption) {
      state.themeOption = themeOption;
      return state;
    },
    toggleHeaderShadow(state, hasHeaderShadow) {
      state.hasHeaderShadow = hasHeaderShadow;
      return state;
    },
    toggleSidenavShadow(state, hasSidenavShadow) {
      state.hasSidenavShadow = hasSidenavShadow;
      return state;
    }
  },
  effects: (dispatch) => ({})
};
