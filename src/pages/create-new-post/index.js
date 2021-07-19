Page({
  data: {
    
  },
  onSubmit(e) {
    const form = e.detail.value;
    let tag = [];
    tag.push(form.tag)
    const body = {
      title: form.title,
      description: form.description,
      tags: tag,
    }
    let user = null
       my.getStorage({
        key: 'user',
        success: async function (res) {
          if(res) {
             user = res.data.customer
          }
        },
        fail: function (res) {
          my.alert({ content: res.errorMessage });
        },
        complete: () => {
              my.request({
              url: `https://tiki-be.herokuapp.com/api/create-post`,
              method: 'POST',
              headers: {
                "content-type": "application/json",
              },
              data: {
                ...body,
                author: {
                  ...user
                },
                like: []
              },
              dataType: "json",
              success: (response) => {
                console.log(response)
              }
            });
            my.navigateBack();
            // my.navigateTo({ url: 'pages/component/view/index' });
        }
      });

  },
});