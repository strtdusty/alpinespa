FROM microsoft/dotnet:1.0.0-preview2-onbuild

RUN apt-get update
RUN wget -qO- https://deb.nodesource.com/setup_4.x | bash -
RUN apt-get install -y build-essential nodejs

WORKDIR /app

COPY project.json .
RUN ["dotnet", "restore"]

COPY . /app
RUN ["dotnet", "build"]

ENV ASPNETCORE_URLS http://*:5000
EXPOSE 5000/tcp

ENTRYPOINT ["/bin/bash", "-c", "if [ -z \"$REMOTE_DEBUGGING\" ]; then dotnet alpineangular.dll; else sleep infinity; fi"]
