ARG PREZ_UI_HOME=/prez-ui
ARG PREZ_UI_VERSION=3.8.0

FROM docker.io/node:18-alpine3.16 AS builder

RUN apk update && \
    apk add \
        bash \
        git

WORKDIR /

ARG PREZ_UI_HOME
ENV PREZ_UI_HOME=${PREZ_UI_HOME}
ARG PREZ_UI_VERSION
ENV PREZ_UI_VERSION=${PREZ_UI_VERSION}

RUN wget -O prez-ui.zip https://github.com/RDFLib/prez-ui/releases/download/v${PREZ_UI_VERSION}/prez-ui-${PREZ_UI_VERSION}.zip \
    && unzip prez-ui.zip

WORKDIR ${PREZ_UI_HOME}

COPY public/ ${PREZ_UI_HOME}/public

# Strip out Prez UI header and footer placeholders.
RUN sed -i 's+<header id="header"></header>+<div id="header"></div>+g' ${PREZ_UI_HOME}/index.html
RUN sed -i 's+<footer id="footer"></footer>+<div id="footer"></div>+g' ${PREZ_UI_HOME}/index.html

# # Add custom header and footer.
RUN mv ${PREZ_UI_HOME}/src/App.vue ${PREZ_UI_HOME}/src/PrezApp.vue
COPY custom-vues/App.vue ${PREZ_UI_HOME}/src/App.vue

# Add custom VocPrez page.
COPY custom-vues/views/VocPrezHomeView.vue ${PREZ_UI_HOME}/src/views/vocprez/VocPrezHomeView.vue
COPY custom-vues/views/AboutView.vue ${PREZ_UI_HOME}/src/views/vocprez/AboutView.vue
COPY custom-vues/views/HomeView.vue ${PREZ_UI_HOME}/src/views/vocprez/HomeView.vue

RUN rm .env

RUN npm ci && npm run build

# ---
FROM docker.io/nginx:1.23-alpine

ARG PREZ_UI_HOME
ENV PREZ_UI_HOME=${PREZ_UI_HOME}

RUN apk add --no-cache bash

RUN mkdir /app

COPY ./docker_entrypoint.sh ./.env ./
COPY --from=builder ${PREZ_UI_HOME}/dist /app
COPY ./nginx.conf /etc/nginx/nginx.conf

RUN chmod +x /docker_entrypoint.sh

EXPOSE 8000

ENTRYPOINT [ "/bin/bash", "./docker_entrypoint.sh" ]
