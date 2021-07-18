
var moment = require('moment');
var id = "";
var commentContent = "";
var userName = "";


Page({
  data: {
    post: null,
    cmts: [6, 12, 15],
  },

  onLoad(options) {
    console.log(options);

    my.getUserInfo({
      success: (res) => { userName = res.name },
      fail: (res) => {}
    });

    id = options;
    my.request({
      url: 'https://tiki-be.herokuapp.com/api/post/' + options,
      method: 'GET',
      success: (response) => {
        console.log(response, 'detail post');
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

  writing(event) {
    commentContent = event.detail.value;
  },

  postComment() {
    console.log( "id:", id);
    console.log(commentContent);
    console.log(userName);
    my.request({
      url: 'https://tiki-be.herokuapp.com/api/' + id + '/comment/create',
      method: 'POST',
      headers: {
        "content-type": "application/json",
      },
      data: {
          author: {
          id: '1x',
          avatar: '',
          name: userName,
          },
          authCode: '123',
          content: commentContent,
        },
      dataType: "json",
      success: (response) => {
        console.log(response, "okkk");
      },
      fail: (re) => {
        console.log('err of creating cmt')
      },
      complete: (re) => {
        
      }
    });
  },

});