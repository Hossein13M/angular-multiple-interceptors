# Angular Multiple Interceptors

A sample Angular project with multiple interceptors

You can learn more about how to implement interceptors in Angular [here](https://medium.com/codex/multiple-interceptors-in-angular-e0880b2f7d91)

Angular does provide us with a feature called interceptor. It is in the middle of our Angular project and server and every HTTP request from the server to our project or vice versa passes through Interceptors.

In this sample project, I have implemented two interceptors that one of them is responsible for adding the token to every HTTP request (except the one for login and register of course!) and the other interceptor is listening to every HTTP request and initiate a loading component (I have used Angular material's progress bar in this case) and then after the request fulfilled, it will remove the loading bar from the page.
