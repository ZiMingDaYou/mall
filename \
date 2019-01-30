FROM node:8.0.0
MAINTAINER Sam 
RUN mkdir -p /media/sam/0EEC10A00EEC10A0/mall/mall/mallDocker
WORKDIR /media/sam/0EEC10A00EEC10A0/mall/mall/mallDocker
COPY . /media/sam/0EEC10A00EEC10A0/mall/mall/mallDocker
RUN npm install
EXPOSE 8088
ENTRYPOINT ["npm","run"]
CMD ["start"]
