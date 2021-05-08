# FROM node:lts-buster AS builder

# WORKDIR /workspace

# # COPY package.json empty-frontend/package.json

# # RUN cd empty-frontend && yarn

# RUN git clone --depth 1 https://github.com/mozyy/empty-frontend.git

# WORKDIR /workspace/empty-frontend

# RUN yarn &&

# # 为了跳过 docker 缓存
# # ADD "https://www.random.org/cgi-bin/randbyte?nbytes=10&format=h" skipcache
# RUN git pull && yarn && yarn rs:build

# FROM golang

# ENV GO111MODULE=on
# ENV GOPROXY=https://goproxy.cn

# COPY simple-server /workspace/simple-server

# WORKDIR /workspace/simple-server

# RUN go build -o app server.go

# CMD ["./app"]

FROM nginx
# FROM nginx:alpine


COPY empty-frontend.conf /etc/nginx/conf.d/empty-frontend.conf
COPY build /usr/share/nginx/empty-frontend
