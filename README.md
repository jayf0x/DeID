# PIIPAYA - Replace PII data with narrative coherence

Local MacOS app to remove any sensitive data from any file, keeping narrative coherence and 100% private.

[Website](https://jayf0x.github.io/PIIPAYA/).


<img src="./assets/preview.png" />

> Currently only fully supporting on MacOS.


**Why?**
Support file batching, `OCR` support for most common image types, PDF and DOCX.


## Security & Privacy
We take security seriously. Please create an issue

## Local dev
Install:
```sh
cd piipaya-desktop
# will install py env
bash piipaya-desktop/scripts/install.sh

# will build Rust sidecar
bash piipaya-desktop/scripts/build-sidecar.sh

#
bun run install
bun run dev
``