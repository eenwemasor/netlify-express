const sdk = ()=>{
    window.fbAsyncInit = function() {
        FB.init({
          appId      : '364826255267649',
          cookie     : true,
          xfbml      : true,
          version    : 'v1.0'
        });
          
        FB.AppEvents.logPageView();   
          
      };
    
      (function(d, s, id){
         var js, fjs = d.getElementsByTagName(s)[0];
         if (d.getElementById(id)) {return;}
         js = d.createElement(s); js.id = id;
         js.src = "https://connect.facebook.net/en_US/sdk.js";
         fjs.parentNode.insertBefore(js, fjs);
       }(document, 'script', 'facebook-jssdk'));
}
sdk();

const login = ()=>{
        FB.login(function(response) {
            if (response.status === 'connected') {
                FB.getLoginStatus(function(response) {
                    statusChangeCallback(response);
                });
                
            } else {
              // The person is not logged into your webpage or we are unable to tell. 
            }
          })
        
    
}

const statusChangeCallback = (res)=>{
    FB.api(
        '/me',
        'GET',
        {"fields":"id,name,first_name,last_name"},
        function(response) {
            console.log(response)
                alert('Logged in as ' + response.name)
        }
      );
}