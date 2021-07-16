Page({
  data: {
    tabs: [{ title: "Bài đăng của tôi" }, { title: "Bài đăng nổi bật" }],
    activeTab: 0,
    topList: null
  },
  onLoad() {
    my.request({
      url: 'https://tiki-be.herokuapp.com/api/get-top-posts',
      method: 'GET',
      success: (response) => {
        console.log(response, 'list');
        this.setData({
          topList: response.data
        })
      },
      fail: (re) => {
        console.log('haha')
      }
    });
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
    my.navigateTo({ url: 'pages/top-posts/index' });
  }
});
