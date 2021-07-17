Page({
  data: {
    post: null,
    cmts: [6, 12, 15],
  },

  onLoad(options) {
    console.log(options);

    my.request({
      url: 'https://tiki-be.herokuapp.com/api/post/' + options,
      method: 'GET',
      success: (response) => {
        console.log(response, 'list');
        this.setData({
          post: response.data
        })
      },
      fail: (re) => {
        console.log('haha')
      }
    });
  },
});