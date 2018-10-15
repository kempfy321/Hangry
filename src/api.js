export default {
  getTodos(){
    return fetch("https://crudapi.codelouisville.org/users/jmudd-demo/todos")
      .then(res => res.json());
  }
}



// Client ID
// LISSRRKQURDJNW1VDULZPXAN1IT1SQW325YYZHPIKOSZKCEN


// Client Secret
// VLT2MCQVLZFH2RPDOKTRFY0KJVI2ZRORNBULSUGGD2XREER1