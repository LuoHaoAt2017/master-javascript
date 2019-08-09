function app() {
  app.handle();
  return app;
}

app.handle = function() {
  console.log("app handle func");
}

const server = new app();