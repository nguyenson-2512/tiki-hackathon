Page({
  data: {
    tabs: [{ title: "Bài đăng của tôi" }, { title: "Bài đăng nổi bật" }],
    activeTab: 0,
    abc: "Tao mới",
  },
  onTabClick({ index, tabsName }) {
    this.setData({
      [tabsName]: index,
    });
  },
  onTabChange({ index, tabsNamse }) {
    this.setData({
      [tabsName]: index,
    });
  },
  navigateToCreate() {
    my.navigateTo({ url: 'pages/create-new-post/index' });
  },
  navToSearch() {
    my.navigateTo({ url: 'pages/top-posts/index?title="aaa"' });
  },
  onLoad() {
    my.getAuthCode({
      success: (codeResp) => {console.log(codeResp.authCode)},
      fail: (res) => {console.log(res)}
    })
  }
});
