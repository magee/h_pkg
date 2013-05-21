Package.describe({
  summary: "It is a web application which enables rich annotation of web content."
});

Package.on_use(function (api) {
  api.use(['embed.js'], 'client');
});

Package.on_test(function (api) {
  api.use(['embed.js'], 'client');
});