router.post('/upload', koaBody({multipart:true}),function *(next) {
    var $self = this;
    var file = this.request.body.files.files;
    var files = [];
    if(file instanceof Array){
        for(var i =0;i<file.length;i++){
            var f = file[i];
            var oo = {
                value:fs.createReadStream(f.path),
                options: {
                    filename: f.name
                }
            };
            files.push(oo);
        }
    }else{
        var oo = {
            value:fs.createReadStream(file.path),
            options: {
                filename: file.name
            }
        };
        files.push(oo);
    }
    var options = {
        url: 'http://localhost:8888/wopi/upload',
        method: 'POST',
        formData: {
            files: files
        }
    };
    yield (request(options).then(function (body) {
        $self.body = body;
    }));
});











$scope.upload = function () {
        var fd = new FormData();
        var file = document.getElementById('abc').files;
        for(var i =0;i<file.length;i++){
            var f= file[i];
            fd.append('files',f);
        }
        $http({
            method: 'POST',
            url: '/upload',
            headers: {
                'Content-Type': undefined
            },
            data: fd,
            transformRequest: angular.identity
        },function (data) {
            console.info(data);
        });
    }
