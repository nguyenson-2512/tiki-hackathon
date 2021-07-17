var moment = require('moment');

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
        console.log(response, 'list from success');
        this.setData({
          post: response.data
        })
      },
      fail: (re) => {
        console.log('haha')
      },
      complete: (re) => {
        this.setData({
          post: {...this.data.post, createdAt: moment(this.data.post.createdAt).fromNow()}
        })
      }
    });
  },
});