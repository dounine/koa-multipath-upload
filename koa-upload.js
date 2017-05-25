router.post('/upload', koaBody({multipart:true}),function *(next) {
    var $self = this;
    var file = this.request.body.files.file;
    var formData = {
        file: {
            value: fs.createReadStream(file.path),
            options: {
                filename: file.name,
                contentType: file.mimeType
            }
        }
    };
    var options = {
        url: 'http://localhost:8888/wopi/upload',
        method: 'POST',
        formData: formData
    }

    yield (request(options).then(function () {
        $self.body = 'nihao'
    }));


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
