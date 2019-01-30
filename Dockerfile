FROM node:8.0.0
MAINTAINER sam 
LABEL Descripttion="This image is build for web"
RUN mkdir -p /opt/mall
COPY . /opt/mall
WORKDIR /opt/mall/server
RUN npm install
RUN npm build
ENV HOST 0.0.0.0
ENV PORT 8088
EXPOSE 8088
ENTRYPOINT ["npm","run"]
CMD ["start"]
##容器正在运行，为此，又在docker run执行容器的时候，加上 expose参数，暴露端口，expose=5000，指定了容器暴露的端口，这下应该没问题了吧，可结果依然如题！想必是网络问题，诸如防火墙、端口映射之类的问题，也想过修改防火墙设置，由于嫌操作麻烦，就未做尝试。百度，必应一下：结果令人失望，又是镜像问题，又是防火墙问题，都无法解决该问题。

#思前想后，不要把问题复杂化了，切换网络吧,docker run的--net命令

#docker run -d --net=host  --privileged=true -v /app:/app -p 5000:5000 bde01d9ed6eb dotnet /app/WebApplication1.dll

#这样容器启动后，访问测试：

#curl http://localhost:5000 解决

#$ sudo docker exec -it 775c7c9ee1e1 /bin/bash  进入容器


# apt-get update
#apt install vim    容器内安装vim