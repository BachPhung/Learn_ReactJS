<h1>React Router</h1>

### Conception

<p>React Router is a standard library for routing in React.
It enables us navigate among views of various components in
 a React Application, allow changing the browser URL
</p>

### Why
<p>This come from the difference between single page application
 (SPA) and multi page application (MPA). </br>With MPA, when clients each time 
 send a request, the server will handle and return full html page which 
 we then view in the browser. So if clients continue to click on a link 
 to another page, it then send an other new requests to the server and 
 then the server response by sending back another html page and the cycle 
 would continue over and over
 </br>
 With SPA, at the first request, the sever response with a empty html page and 
 a compiled react javascript file which control our web application. Then
 client's device would execute the code from bundle file and render the component 
 onto the page
 </p>
 //