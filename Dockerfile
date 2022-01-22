FROM moby/buildkit:v0.9.3
WORKDIR /business
COPY business README.md /business/
ENV PATH=/business:$PATH
ENTRYPOINT [ "/bhojpur/business" ]