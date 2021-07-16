App({
  onLaunch(options) {
    console.log('App onLaunch');
    my.isLoggedIn({
      success: (res) => { 
        console.log(res)
        if(res) {
          my.getAuthCode({
            scopes: ["offline", "user_profile"],
            success: (res) => {
              console.log(res)
              my.request({
                url: `https://tiki-be.herokuapp.com/api/auth-code/${res.authCode}`,
                method: 'GET',
                success: (response) => {
                  my.setStorage({
                    key: 'user',
                    data: response.data,
                    success: function () {
                      console.log('done');
                    }
                  });
                  console.log(response, 'jjj');
                }
              });
            },
            fail: (res) => {
              console.log(res)
            }
          });
        } 
      },
      fail: (res) => {console.log(res)}
    });
  },
  onShow(options) {
  },
});


    // my.isLoggedIn({
    //   success: (res) => {
    //     if(res) {
    //       my.getAuthCode({
    //         scopes: ["offline", "user_profile"],
    //         success: (res) => {
    //           my.request({
    //             url: `https://tiki-be.herokuapp.com/api/auth-code/${res.authCode}`,
    //             method: 'GET',
    //             success: (response) => {
    //               console.log(res, 'jjj');
    //             }
    //           });
    //         },
    //         fail: (res) => {}
    //       });
    //     };
    //   },
    //   fail: (e) => {
    //     console.log(e);
    //   },
    // });

    
  // },

          //   my.getAuthCode({
          //   scopes: ["offline", "user_profile"],
          //   success: (res) => {
          //     console.log(res)
          //     my.request({
          //       url: `https://tiki-be.herokuapp.com/api/auth-code/${res.authCode}`,
          //       method: 'GET',
          //       success: (response) => {
          //         console.log(res, 'jjj');
          //       }
          //     });
          //   },
          //   fail: (res) => {}
          // })