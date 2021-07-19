// var moment = require('moment');
var id = "";
var commentContent = "";
var userName = "";

Page({
  data: {
    post: null,
    commentLike: null,
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
        function formatDate(date) {
          return date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate() + " " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds() 
        }
        let date = new Date(this.data.post.createdAt)
        this.setData({
          post: {...this.data.post, createdAt: formatDate(date) }
        })
        let formatCommentDate= []
        for(let item of this.data.post.comment) {
          console.log(item);
        }
        this.setData({
          post: {...this.data.post, comments: formatDate(date) }
        })
        comments
      }
    });
    
    
  },

  writing(event) {
    commentContent = event.detail.value;
  },

  onClickLikeComment(event) {
    const commentId = event.target.dataset.id;
    const commentIndex = event.target.dataset.index;
    
    const post = this.data.post;
      my.getStorage({
        key: 'user',
        success: async function (res) {
          if(res) {
            console.log('user', res)
          }
        },
        fail: function (res) {
          my.alert({ content: res.errorMessage });
        },
        complete: () => {
          my.request({
              url: 'https://tiki-be.herokuapp.com/api/' + commentId + '/like',
              method: 'PUT',
              headers: {
                "content-type": "application/json",
              },
              data: {
                author: {
                  id: '1x',
                  avatar: '',
                  name: userName,
                },
                isPost: false
              },
              dataType: "json",
              success: (response) => {
                console.log(response, 'liked');
                console.log(post.comments[commentIndex].like.length + 1);
                this.setData({ commentLike: post.comments[commentIndex].like.length + 1, first: false, second: true})
              },
          });
        }
      });
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