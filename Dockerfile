FROM node:8.0.0
MAINTAINER Sam 
RUN mkdir -p /media/sam/0EEC10A00EEC10A0/mall/mall/mallDocker
WORKDIR /media/sam/0EEC10A00EEC10A0/mall/mall/mallDocker
COPY . /media/sam/0EEC10A00EEC10A0/mall/mall/mallDocker
RUN npm install
RUN npm build
ENV HOST 0.0.0.0
ENV PORT 8088
EXPOSE 8088
ENTRYPOINT ["npm","run"]
CMD ["start"]
