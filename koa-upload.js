router.post('/users', koaBody({multipart:true}),function *(next) {
    var file = this.request.body.files.file;
    var r = request.post('http://localhost:8888/wopi/upload', function optionalCallback (err, httpResponse, body) {
        if (err) {
            return console.error('upload failed:', err);
        }
        console.log('Upload successful!  Server responded with:', body);
    });
    var form = r.form();
    form.append('file', fs.createReadStream(file.path));
    form.append('name', file.name);
});











$scope.upload = function () {
        var fd = new FormData();
        var file = document.getElementById('abc').files[0];
        fd.append('file', file);
        $http({

            method: 'POST',
            url: '/users',
            headers: {

                'Content-Type': undefined

            },
            data: fd,
            transformRequest: function (data, headersGetter) {
                var formData = new FormData();
                angular.forEach(data, function (value, key) {
                    formData.append(key, value);

                });
                return formData;

            }
        },function (data) {
            console.info(data);
        });
    }
